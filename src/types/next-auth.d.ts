import NextAuth from "next-auth";

declare module "next-auth" {
	interface User {
		id: string;
		name: string;
		username: string;
		email: string;
		emailVerified: boolean;
		image: string;
	}
	interface Session {
		user: {
			id: string;
			name: string;
			email: string;
		};
	}
}
