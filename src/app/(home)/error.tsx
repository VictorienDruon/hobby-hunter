"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface HomeErrorProps {
	error: Error;
	reset: () => void;
}

const HomeError = ({ error, reset }: HomeErrorProps) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="flex min-h-screen flex-col items-center gap-20 px-6 py-20 md:gap-24 md:py-24 lg:gap-28 lg:py-28">
			<h1 className="text-center text-2xl font-medium md:text-4xl lg:text-5xl">
				Something went wrong!
			</h1>
			<p className="max-w-[600px] text-center text-sm text-muted-foreground lg:text-lg">
				An unexpected error occurred, sorry for the inconvenience.
				Please try again later.
			</p>
			<div>
				<Button
					variant="default"
					size="lg"
					className="p-5 text-sm lg:text-lg"
					onClick={() => reset()}
				>
					Try Again
				</Button>
			</div>
		</main>
	);
};

export default HomeError;
