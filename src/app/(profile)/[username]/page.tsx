import Profile from "@/components/profile/Profile";
import { User } from "@/interfaces/User";

interface ProfilePageProps {
	params: { username: string };
}

const ProfilePage = ({ params }: ProfilePageProps) => {
	const isOwner = false;
	const user: User = {
		name: "John Doe",
		username: "johndoe",
		image: "https://avatars.githubusercontent.com/u/124599?v=4",
		banner: "https://avatars.githubusercontent.com/u/124599?v=4",
		infos: {
			bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
			location: "Earth",
			website: "https://lorem.ipsum.com",
			twitter: "john_doe",
			github: "JohnDoe",
			joinedIn: "May 2023",
			following: 4,
			follower: 2,
		},
	};

	return <Profile isOwner={isOwner} user={user} />;
};

export default ProfilePage;
