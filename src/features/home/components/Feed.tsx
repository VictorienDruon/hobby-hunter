import UserCoverflow from "./user-coverflow";
import { Album, User, UserAlbum } from "@prisma/client";

interface FeedProps {
	users: (User & {
		albums: (UserAlbum & {
			album: Album;
		})[];
	})[];
}

const Feed = ({ users }: FeedProps) => {
	return (
		<div className="md:gap-15 flex w-full flex-col items-center gap-8 pl-8 md:pl-12 lg:gap-12 lg:pl-14">
			{users.map((user) => (
				<UserCoverflow key={user.id} user={user} />
			))}
		</div>
	);
};

export default Feed;
