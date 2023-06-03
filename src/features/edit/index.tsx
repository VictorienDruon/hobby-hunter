import Title from "./Title";
import Form from "./form";
import { UserInfos } from "@prisma/client";

const Edit = ({ userInfos }: {userInfos: UserInfos}) => {
	return (
		<main className="flex flex-col gap-10 px-6 py-10 sm:px-8 md:px-14 lg:px-20">
			<Title />
			<Form userInfos={userInfos} />
		</main>
	);
};

export default Edit;
