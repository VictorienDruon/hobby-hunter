import Follows from "@/components/profile/Follows";
import Details from "@/components/profile/Details";
import { UserInfos } from "@/interfaces/User";

const UserInfo = ({ infos }: { infos: UserInfos }) => {
	const { bio, following, follower, ...details } = infos;

	return (
		<div className="md:text-md flex flex-col gap-1 text-sm lg:text-lg">
			<p>{bio}</p>
			<Details {...details} />
			<Follows following={following} follower={follower} />
		</div>
	);
};
export default UserInfo;
