import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib";
import Edit from "@/features/edit";

const getUserInfos = async (username: string) => {
	const userInfos = await prisma.userInfos.findUnique({
		where: {
			username: username,
		},
	});
	if (!userInfos) throw new Error("User not found");
	return userInfos;
};

const EditPage = async () => {
	const session = await getServerSession(authOptions);

	if (!session?.user) {
		redirect("/signin");
	}

	const username = session.user.name;
	const userInfos = await getUserInfos(username);

	return <Edit userInfos={userInfos} />;
};

export default EditPage;
