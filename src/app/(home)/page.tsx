import { prisma } from "@/lib";
import Home from "@/features/home";

const getUsers = async () => {
	const users = await prisma.user.findMany({
		take: 20,
		orderBy: {
			createdAt: "desc",
		},
		where: {
			albums: {
				some: {},
			},
		},
		include: {
			albums: {
				include: {
					album: true,
				},
			},
		},
	});
	if (!users) throw new Error("User not found");
	return users;
};

const HomePage = async () => {
	const users = await getUsers();
	return <Home users={users} />;
};

export default HomePage;
