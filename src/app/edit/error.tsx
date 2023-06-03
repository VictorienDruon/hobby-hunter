"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

interface EditErrorProps {
	error: Error;
	reset: () => void;
}

const EditError = ({ error, reset }: EditErrorProps) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="flex flex-col items-center gap-20 px-6 py-20 md:gap-24 md:py-24 lg:gap-28 lg:py-28">
			<h1 className="text-center text-2xl font-medium md:text-4xl lg:text-5xl">
				Something went wrong!
			</h1>
			<p className="max-w-[600px] text-center text-sm text-muted-foreground lg:text-lg">
				You are not supposed to be here. Please try again later or go to
				the Sign In page.
			</p>
			<div className="flex justify-end gap-5">
				<Button
					variant="outline"
					size="lg"
					className="p-5 text-sm lg:text-lg"
					onClick={() => reset()}
				>
					Try Again
				</Button>
				<Link
					href={"/signin"}
					className={`${buttonVariants({
						variant: "default",
						size: "lg",
					})} p-5 text-sm lg:text-lg`}
				>
					Sign In Now
				</Link>
			</div>
		</main>
	);
};

export default EditError;
