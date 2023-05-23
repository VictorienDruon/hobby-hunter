"use client";

import { useTheme } from "next-themes";
import { themes, Theme } from "./themes";

const Banner = ({ theme }: { theme: Theme }) => {
	const { theme: pageTheme } = useTheme();

	return (
		<div className="relative h-24 w-full sm:h-32 md:h-40 lg:h-48">
			<div
				className={`h-full w-full bg-gradient-to-tr ${themes[theme]} ${
					pageTheme === "dark" && "opacity-70"
				}`}
			/>
		</div>
	);
};

export default Banner;
