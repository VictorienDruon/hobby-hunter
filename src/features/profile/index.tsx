import Banner from "./banner";
import UserHeader from "./user-header";
import UserName from "./UserName";
import UserInfo from "./user-info";
import { Separator } from "@/components/ui/separator";
import Coverflow from "@/components/coverflow";
import Settings from "./Settings";
import { Album, User, UserAlbum, UserInfos } from "@prisma/client";
import { Theme } from "./banner/themes";

interface ProfileProps {
	isOwner: boolean;
	user: User & {
		accounts: {
			provider: string;
			providerAccountId: string;
		}[];
		infos: UserInfos;
		albums: (UserAlbum & {
			album: Album;
		})[];
		_count: {
			followers: number;
			following: number;
		};
	};
}

const Profile = ({ isOwner, user }: ProfileProps) => {
	const {
		name,
		username,
		image,
		createdAt,
		accounts,
		infos,
		albums,
		_count,
	} = user;

	return (
		<>
			<Banner theme={infos?.theme as Theme} />
			<main className="relative -top-10 flex flex-col gap-12 px-6 pb-12 sm:px-12 md:-top-14 md:gap-14 md:px-32 lg:-top-[4.5rem] lg:gap-16 lg:px-48">
				<div className="flex flex-col gap-1 md:gap-3 lg:gap-5">
					<UserHeader isOwner={isOwner} name={name} image={image} />
					<UserName name={name} username={username} />
					<UserInfo
						createdAt={createdAt}
						accounts={accounts}
						infos={infos}
						count={_count}
					/>
					<Separator className="my-4" />
				</div>
				<div className="flex w-full flex-col items-center gap-4 md:gap-6 lg:gap-8">
					<Coverflow isOwner={isOwner} userAlbums={albums} />
				</div>
				{isOwner && <Settings />}
			</main>
		</>
	);
};
export default Profile;
