import Follows from "./components/Follows";
import Details from "./components/Details";
import { UserInfos } from "@/types/User";

interface UserInfoProps {
	following: number;
	followers: number;
	infos: UserInfos;
}

const UserInfo = ({ following, followers, infos }: UserInfoProps) => {
	const { bio, ...details } = infos;

	return (
		<div className="flex flex-col gap-1 text-sm lg:text-lg">
			<p>{bio}</p>
			<Details {...details} />
			<Follows following={following} followers={followers} />
		</div>
	);
};
export default UserInfo;
