import Navbar from "@/components/profile/Navbar";
import Banner from "@/components/profile/Banner";
import UserHeader from "@/components/profile/UserHeader";
import UserName from "@/components/profile/UserName";
import UserInfo from "@/components/profile/UserInfo";
import { Separator } from "@/components/ui/separator";
import { User } from "@/interfaces/User";

interface ProfileProps {
	isOwner: boolean;
	user: User;
}

const Profile = ({ isOwner, user }: ProfileProps) => {
	const { name, username, image, banner, infos } = user;

	return (
		<>
			<Navbar />
			<Banner banner={banner} />
			<main className="relative -top-10 flex min-h-screen flex-col gap-5 px-6 pb-12 sm:px-12 md:-top-14 md:px-32 lg:-top-[4.5rem] lg:px-48">
				<UserHeader isOwner={isOwner} name={name} image={image} />
				<UserName name={name} username={username} />
				<UserInfo infos={infos} />
				<Separator className="my-4" />
			</main>
		</>
	);
};

export default Profile;
