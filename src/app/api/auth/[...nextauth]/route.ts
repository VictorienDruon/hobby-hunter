import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib";

const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID!,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	pages: { signIn: "/signin" },
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true;
		},
		async session({ session, token, user }) {
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			return token;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
