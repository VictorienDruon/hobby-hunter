const Home = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between px-6 py-12">
			<div className="flex flex-col items-center gap-8">
				<h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
					Share your tastes to the world{" "}
					<br className="hidden sm:inline" />
					with style.
				</h1>
				<p className="max-w-[700px] text-center text-xl text-muted-foreground">
					Discover the music and books people love, find new
					favorites, and connect with fellow enthusiasts all around
					the world.
				</p>
			</div>
			<h2 className="sm:text-2xl md:text-3xl lg:text-4xl">Building 🚧</h2>
		</main>
	);
};

export default Home;
