import Coverflow from "@/components/coverflow";

const Feed = () => {
	const musics = [
		{
			id: "1",
			name: "name 1",
			artist: "artist 1",
			image: "/tyler.jpeg",
		},
		{
			id: "2",
			name: "name 2",
			artist: "artist 2",
			image: "/tyler.jpeg",
		},
		{
			id: "3",
			name: "name 3",
			artist: "artist 3",
			image: "/tyler.jpeg",
		},
		{
			id: "4",
			name: "name 4",
			artist: "artist 4",
			image: "/tyler.jpeg",
		},
		{
			id: "5",
			name: "name 5",
			artist: "artist 5",
			image: "/tyler.jpeg",
		},
		{
			id: "6",
			name: "name 6",
			artist: "artist 6",
			image: "/tyler.jpeg",
		},
	];

	return (
		<div className="flex w-full flex-col items-center gap-4 md:gap-6 lg:gap-8">
			<Coverflow musics={musics} />
		</div>
	);
};

export default Feed;
