import Title from "./components/Title";
import Feed from "./components/Feed";
import { Album, User, UserAlbum } from "@prisma/client";

interface HomeProps {
	users: (User & {
		albums: (UserAlbum & {
			album: Album;
		})[];
	})[];
}

const Home = ({ users }: HomeProps) => {
	return (
		<main className="flex min-h-screen flex-col items-center gap-20 px-6 pb-20 pt-12 md:gap-24 md:pb-24 lg:gap-28 lg:pb-28">
			<Title />
			<Feed users={users} />
		</main>
	);
};

export default Home;
