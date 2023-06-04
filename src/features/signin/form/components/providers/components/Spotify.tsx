"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

const Spotify = () => {
	return (
		<Button
			onClick={() =>
				signIn("spotify", {
					redirect: true,
					callbackUrl: "/",
				})
			}
			className="flex w-full max-w-[350px] items-center bg-[#1DB954] hover:bg-[#159E41]"
		>
			<Icons.spotify className="h-full text-white" />
		</Button>
	);
};

export default Spotify;
