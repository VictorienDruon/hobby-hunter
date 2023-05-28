import Title from "./components/Title";
import Feed from "./components/Feed";

const Home = () => {
	return (
		<main className="flex min-h-screen flex-col items-center gap-20 px-6 py-12 md:gap-24 lg:gap-28">
			<Title />
			<Feed />
		</main>
	);
};

export default Home;
