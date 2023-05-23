import Banner from "./banner";
import UserHeader from "./user-header";
import UserName from "./UserName";
import UserInfo from "./user-info";
import { Separator } from "@/components/ui/separator";
import { User } from "@/types/User";
import Settings from "./Settings";

interface ProfileProps {
	isOwner: boolean;
	user: User;
}

const Profile = ({ isOwner, user }: ProfileProps) => {
	const { name, username, image, infos } = user;

	return (
		<>
			<Banner theme={infos.theme} />
			<main className="relative -top-10 flex min-h-screen flex-col gap-5 px-6 pb-12 sm:px-12 md:-top-14 md:px-32 lg:-top-[4.5rem] lg:px-48">
				<UserHeader isOwner={isOwner} name={name} image={image} />
				<UserName name={name} username={username} />
				<UserInfo infos={infos} />
				<Separator className="my-4" />
				{isOwner && <Settings />}
			</main>
		</>
	);
};
export default Profile;
