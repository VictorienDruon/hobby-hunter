import Follows from "./components/Follows";
import Details from "./components/Details";
import { UserInfos } from "@prisma/client";

interface UserInfoProps {
	createdAt: Date;
	accounts: {
		provider: string;
		providerAccountId: string;
	}[];
	infos: UserInfos | null;
	count: {
		following: number;
		followers: number;
	};
}

const UserInfo = ({ createdAt, accounts, infos, count }: UserInfoProps) => {
	const { following, followers } = count;

	return (
		<div className="flex flex-col gap-1 text-sm lg:text-lg">
			{infos?.bio && <p>{infos.bio}</p>}
			<Details createdAt={createdAt} accounts={accounts} infos={infos} />
			<Follows following={following} followers={followers} />
		</div>
	);
};
export default UserInfo;
