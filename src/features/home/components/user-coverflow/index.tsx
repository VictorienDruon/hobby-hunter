import Coverflow from "@/components/coverflow";
import { Label } from "@/components/ui/label";
import { Album, UserAlbum, User } from "@prisma/client";
import Link from "next/link";
import Avatar from "./components/Avatar";

interface UserProps {
	user: User & {
		albums: (UserAlbum & {
			album: Album;
		})[];
	};
}

const UserCoverflow = ({ user }: UserProps) => {
	const { name, username, image, albums } = user;
	return (
		<div
			key={user.id}
			className="flex w-full max-w-[1200px] flex-col gap-1"
		>
			<Label className="w-full px-6 text-xs font-normal text-muted-foreground md:text-sm lg:text-base">
				<Link href={"/" + username}>{`${name} • @${username}`}</Link>
			</Label>

			<div className="flex items-center">
				<div className="absolute">
					<Link
						href={"/" + username}
						className="relative -left-1/2 w-full"
					>
						<Avatar name={name} image={image} />
					</Link>
				</div>
				<Coverflow userAlbums={albums} />
			</div>
		</div>
	);
};

export default UserCoverflow;
