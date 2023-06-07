import Details from "./components/Details";
import { UserInfos } from "@prisma/client";

interface UserInfoProps {
	createdAt: Date;
	accounts: {
		provider: string;
		providerAccountId: string;
	}[];
	infos: UserInfos | null;
}

const UserInfo = ({ createdAt, accounts, infos }: UserInfoProps) => {
	return (
		<div className="flex flex-col gap-1 text-sm lg:text-lg">
			{infos?.bio && <p>{infos.bio}</p>}
			<Details createdAt={createdAt} accounts={accounts} infos={infos} />
		</div>
	);
};
export default UserInfo;
