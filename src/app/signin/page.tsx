"use client";

import UserAgreement from "@/components/signin/UserAgreement";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
	return (
		<main className="grid min-h-screen p-6 md:grid-cols-2">
			<div className="flex h-full flex-col justify-between px-6 py-12">
				<div className="flex flex-col gap-4">
					<h1 className="text-2xl font-bold leading-tight tracking-tighter lg:text-4xl">
						Get Started
					</h1>
					<h2 className="max-w-[700px] text-lg text-muted-foreground">
						Sign in to your account
					</h2>
				</div>
				<Button className="max-w-[1/2]">Sign In with Spotify</Button>
				<UserAgreement />
			</div>
		</main>
	);
};

export default SignInPage;
