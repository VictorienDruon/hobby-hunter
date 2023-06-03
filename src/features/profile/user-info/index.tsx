import Follows from "./components/Follows";
import Details from "./components/Details";
import { UserInfos } from "@prisma/client";

interface UserInfoProps {
	createdAt: Date;
	infos: UserInfos | null;
	count: {
		following: number;
		followers: number;
	}
}

const UserInfo = ({createdAt, infos, count }: UserInfoProps) => {
	const joinedIn = createdAt.toLocaleString("en-US", {
		month: "long",
		year: "numeric",
	});
	const {following, followers} = count;

	return (
		<div className="flex flex-col gap-1 text-sm lg:text-lg">
			{infos?.bio && <p>{infos.bio}</p>}
			<Details joinedIn={joinedIn} infos={infos} />
			<Follows following={following} followers={followers} />
		</div>
	);
};
export default UserInfo;
