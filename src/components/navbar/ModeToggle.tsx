"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

const ModeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="sm"
			className="sm:py-3 md:py-5"
			onClick={() =>
				theme === "light" ? setTheme("dark") : setTheme("light")
			}
		>
			<Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};

export default ModeToggle;
