import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib";
import Profile from "@/features/profile";

interface ProfilePageProps {
	params: { username: string };
}

const getUser = async (username: string) => {
	const user = await prisma.user.findUnique({
		where: {
			username: username,
		},
		include: {
			accounts: {
				select: { provider: true, providerAccountId: true },
			},
			infos: true,
			albums: {
				include: {
					album: true,
				},
			},
		},
	});
	if (!user) throw new Error("User not found");
	return user;
};

const ProfilePage = async ({ params }: ProfilePageProps) => {
	const session = await getServerSession(authOptions);
	const isOwner = session?.user?.name === params.username;
	const user = await getUser(params.username);

	return <Profile isOwner={isOwner} user={user} />;
};

export default ProfilePage;
