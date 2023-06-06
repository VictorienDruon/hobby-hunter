"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SignOut = () => {
	return (
		<div className="flex justify-end">
			<Button
				variant="outline"
				size="sm"
				onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
				className="text-xs md:p-5 lg:text-sm"
			>
				Sign Out
			</Button>
		</div>
	);
};

export default SignOut;
