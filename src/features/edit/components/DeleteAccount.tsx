"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { signOut } from "next-auth/react";

const DeleteAccount = () => {
	const handleDeleteClick = async () => {
		const deleteUser = await fetch("/api/delete");
		const res = await deleteUser.json();
		if (res.error) {
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "An error occured, please try again later",
			});
		} else {
			toast({
				title: "Success!",
				description: "Your profile has been deleted",
			});
			signOut({ redirect: true, callbackUrl: "/" });
		}
	};
	return (
		<div>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button
						variant="outline"
						size="sm"
						className="border-destructive text-xs text-destructive hover:bg-destructive/5 hover:text-destructive dark:hover:bg-destructive/25 md:p-5 lg:text-sm"
					>
						Delete Account
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>
							Are you absolutely sure?
						</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently
							delete your account and remove your data from our
							servers.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction onClick={handleDeleteClick}>
							Continue
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

export default DeleteAccount;
