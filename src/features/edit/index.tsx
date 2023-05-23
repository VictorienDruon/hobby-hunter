import { User } from "@/types/User";
import Title from "./Title";
import Form from "./form";

const Edit = ({ user }: { user: User }) => {
	return (
		<main className="flex flex-col gap-10 px-6 py-10 sm:px-8 md:px-14 lg:px-20">
			<Title />
			<Form user={user} />
		</main>
	);
};

export default Edit;
