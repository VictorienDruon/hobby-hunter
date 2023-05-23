import { Button } from "@/components/ui/button";

const Settings = () => {
	return (
		<div className="flex justify-end gap-4">
			<Button
				variant="outline"
				className="border-destructive text-destructive hover:bg-destructive/5 hover:text-destructive dark:hover:bg-destructive/25"
			>
				Sign Out
			</Button>
			<Button variant="destructive">Delete Account</Button>
		</div>
	);
};

export default Settings;
