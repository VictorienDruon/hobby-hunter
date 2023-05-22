import { Button } from "@/components/ui/button";
import Avatar from "./components/Avatar";

interface UserHeaderProps {
	isOwner: boolean;
	name: string;
	image?: string;
}

const UserHeader = ({ isOwner, name, image }: UserHeaderProps) => {
	return (
		<div className="flex w-full items-end justify-between">
			<Avatar name={name} image={image} />
			{isOwner ? (
				<Button
					variant="outline"
					className="rounded-3xl px-4 md:px-8 lg:px-12"
					size="sm"
				>
					Edit
				</Button>
			) : (
				<Button
					variant="default"
					className="rounded-3xl px-4 md:px-8 lg:px-12"
					size="sm"
				>
					Follow
				</Button>
			)}
		</div>
	);
};

export default UserHeader;
