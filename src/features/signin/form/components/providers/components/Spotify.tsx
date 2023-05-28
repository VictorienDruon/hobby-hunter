"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
			<div className="relative m-5 h-full w-full">
				<Image
					src="/providers/spotify.png"
					alt="spotify"
					fill={true}
					className="object-contain"
					draggable={false}
				/>
			</div>
		</Button>
	);
};

export default Spotify;
