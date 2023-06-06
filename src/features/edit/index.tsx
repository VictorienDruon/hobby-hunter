import { UserInfos } from "@prisma/client";
import Title from "./components/Title";
import Form from "./components/form";
import DeleteAccount from "./components/DeleteAccount";
import { Separator } from "@/components/ui/separator";

const Edit = ({ userInfos }: { userInfos: UserInfos }) => {
	return (
		<main className="flex flex-col gap-10 px-6 py-10 sm:px-8 md:px-14 lg:px-20">
			<Title />
			<Form userInfos={userInfos} />
			<Separator className="my-4" />
			<DeleteAccount />
		</main>
	);
};

export default Edit;
