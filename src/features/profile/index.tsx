import Banner from "./banner";
import UserHeader from "./user-header";
import UserName from "./UserName";
import UserInfo from "./user-info";
import { Separator } from "@/components/ui/separator";
import Coverflow from "@/components/coverflow";
import Settings from "./Settings";
import { User } from "@/types/User";

interface ProfileProps {
	isOwner: boolean;
	user: User;
}

const Profile = ({ isOwner, user }: ProfileProps) => {
	const { name, username, image, infos, musics } = user;

	return (
		<>
			<Banner theme={infos.theme} />
			<main className="relative -top-10 flex min-h-screen flex-col gap-12 px-6 pb-12 sm:px-12 md:-top-14 md:gap-14 md:px-32 lg:-top-[4.5rem] lg:gap-16 lg:px-48">
				<div className="flex flex-col gap-1 md:gap-3 lg:gap-5">
					<UserHeader isOwner={isOwner} name={name} image={image} />
					<UserName name={name} username={username} />
					<UserInfo infos={infos} />
					<Separator className="my-4" />
				</div>
				<div className="flex w-full flex-col items-center gap-4 md:gap-6 lg:gap-8">
					<Coverflow musics={musics} />
				</div>
				{isOwner && <Settings />}
			</main>
		</>
	);
};
export default Profile;
