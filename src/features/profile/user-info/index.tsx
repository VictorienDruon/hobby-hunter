import Follows from "./components/Follows";
import Details from "./components/Details";
import { UserInfos } from "@/types/User";

const UserInfo = ({ infos }: { infos: UserInfos }) => {
	const { bio, following, follower, ...details } = infos;

	return (
		<div className="flex flex-col gap-1 text-sm lg:text-lg">
			<p>{bio}</p>
			<Details {...details} />
			<Follows following={following} follower={follower} />
		</div>
	);
};
export default UserInfo;
