import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider, { SpotifyProfile } from "next-auth/providers/spotify";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib";
import { Album as SpotifyAlbum } from "spotify-types";
import { Album } from "@prisma/client";

interface Item {
	added_at: Date;
	album: SpotifyAlbum;
}

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
	events: {
		async signIn({ user, account }) {
			if (account) {
				const data = await fetch(
					"https://api.spotify.com/v1/me/albums",
					{
						method: "GET",
						headers: {
							Authorization: `Bearer ${account.access_token}`,
						},
					}
				);
				const res = await data.json();

				const albums: Album[] = res.items.map((item: Item) => {
					const { album } = item;
					const artists = album.artists.map((artist) => artist.name);
					const artist = artists.join(", ");
					return {
						id: album.external_ids.upc,
						name: album.name,
						artist: artist,
						image: album.images[0].url,
					};
				});

				const existingAlbums = await prisma.album.findMany({
					where: {
						id: {
							in: albums.map((album) => album.id),
						},
					},
					select: { id: true },
				});
				const existingIds = existingAlbums.map(
					(album: { id: string }) => album.id
				);
				const newAlbums = albums.filter(
					(album) => !existingIds.includes(album.id)
				);

				await prisma.album.createMany({
					data: newAlbums,
				});

				await prisma.userAlbum.deleteMany({
					where: { username: user.username },
				});

				await prisma.userAlbum.createMany({
					data: albums.map((album) => ({
						username: user.username,
						albumId: album.id,
					})),
				});
			}
		},
	},
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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
