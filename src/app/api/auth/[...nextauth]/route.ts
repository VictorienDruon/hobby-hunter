import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider, { SpotifyProfile } from "next-auth/providers/spotify";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib";

const generateUsername = async (name: string) => {
	const forbiddenUsernames = ["edit", "signin"];
	const maxUsernameLength = 15;
	const cleanName = name.replace(/[^a-zA-Z0-9]/g, "");
	const truncatedName = cleanName.slice(0, maxUsernameLength);

	let existingUser = await prisma.user.findFirst({
		where: {
			username: truncatedName,
		},
	});

	if (!existingUser && !forbiddenUsernames.includes(truncatedName)) {
		return truncatedName;
	}

	let variant = 1;
	let generatedUsername = `${truncatedName}${variant}`;

	while (existingUser || forbiddenUsernames.includes(generatedUsername)) {
		variant++;
		generatedUsername = `${truncatedName}${variant}`;
		existingUser = await prisma.user.findFirst({
			where: {
				username: generatedUsername,
			},
		});
	}

	return generatedUsername;
};

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID!,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
			authorization: {
				params: { scope: "user-read-email user-library-read" },
			},
			async profile(profile: SpotifyProfile) {
				const username = await generateUsername(profile.display_name);
				return {
					id: profile.id,
					name: profile.display_name,
					username: username,
					email: profile.email,
					emailVerified: true,
					image: profile.images?.[0]?.url ?? null,
					infos: {
						connectOrCreate: {
							where: { username: username },
							create: {
								username: username,
							},
						},
					},
				};
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	pages: { signIn: "/signin" },
	callbacks: {
		async session({ session, user }) {
			session.user = {
				id: user.id,
				name: user.username,
				email: user.email,
			};
			return session;
		},
	},
	// events: {
	// 	async signIn({ user, account }) {
	// 		if (account) {
	// 			const data = await fetch(
	// 				"https://api.spotify.com/v1/me/albums",
	// 				{
	// 					method: "GET",
	// 					headers: {
	// 						Authorization: `Bearer ${account.accessToken}`,
	// 					},
	// 				}
	// 			);
	// 			const res = await data.json();
	// 			console.log(res);
	// 		} else {
	// 			throw new Error("No account.");
	// 		}
	// 	},
	// },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
