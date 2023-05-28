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
		following: 4,
		followers: 2,
		infos: {
			joinedIn: "May 2023",
			job: "",
			bio: "ouais c'est greg",
			location: "Earth",
			website: "https://lorem.ipsum.com",
			twitter: "john_doe",
			github: "JohnDoe",
			theme: "pink",
		},
		musics: [
			{
				id: "1",
				name: "name 1",
				artist: "artist 1",
				image: "/tyler.jpeg",
			},
			{
				id: "2",
				name: "name 2",
				artist: "artist 2",
				image: "/tyler.jpeg",
			},
			{
				id: "3",
				name: "name 3",
				artist: "artist 3",
				image: "/tyler.jpeg",
			},
			{
				id: "4",
				name: "name 4",
				artist: "artist 4",
				image: "/tyler.jpeg",
			},
			{
				id: "5",
				name: "name 5",
				artist: "artist 5",
				image: "/tyler.jpeg",
			},
			{
				id: "6",
				name: "name 6",
				artist: "artist 6",
				image: "/tyler.jpeg",
			},
		],
	};

	return <Profile isOwner={isOwner} user={user} />;
};

export default ProfilePage;
