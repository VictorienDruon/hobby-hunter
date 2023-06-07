const Title = () => {
	return (
		<div className="flex flex-col items-center gap-8">
			<h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
				Share your tastes to the world{" "}
				<br className="hidden sm:inline" />
				with style.
			</h1>
			<p className="max-w-[700px] text-center text-sm lg:text-lg text-muted-foreground">
				Discover the music and books (coming soon!) people love, find new favorites,
				and connect with fellow enthusiasts all around the world.
			</p>
		</div>
	);
};

export default Title;
