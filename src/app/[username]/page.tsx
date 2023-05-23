import { User } from "@/types/User";
import Profile from "@/features/profile";

interface ProfilePageProps {
	params: { username: string };
}

const ProfilePage = ({ params }: ProfilePageProps) => {
	const isOwner = true;
	const user: User = {
		name: "John Doe",
		username: "johndoe",
		image: "https://avatars.githubusercontent.com/u/124599?v=4",
		infos: {
			job: "",
			joinedIn: "May 2023",
			following: 4,
			follower: 2,
			bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			location: "Earth",
			website: "https://lorem.ipsum.com",
			twitter: "john_doe",
			github: "JohnDoe",
			theme: "blue",
		},
	};

	return <Profile isOwner={isOwner} user={user} />;
};

export default ProfilePage;