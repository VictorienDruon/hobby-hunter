"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const Settings = () => {
	return (
		<div className="flex justify-end gap-4">
			<Button
				variant="outline"
				size="sm"
				className="text-xs md:p-5 lg:text-sm"
			>
				Delete Account
			</Button>
			<Button
				variant="default"
				size="sm"
				onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
				className="text-xs md:p-5 lg:text-sm"
			>
				Sign Out
			</Button>
		</div>
	);
};

export default Settings;
