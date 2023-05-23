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
			joinedIn: "May 2023",
			following: 4,
			follower: 2,
			job: "",
			bio: "ouais c'est greg",
			location: "Earth",
			website: "https://lorem.ipsum.com",
			twitter: "john_doe",
			github: "JohnDoe",
			theme: "pink",
		},
	};

	return <Profile isOwner={isOwner} user={user} />;
};

export default ProfilePage;
