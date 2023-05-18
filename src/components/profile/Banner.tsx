import Image from "next/image";

const Banner = ({ banner }: { banner?: string }) => {
	return (
		<div className="relative h-24 w-full sm:h-32 md:h-40 lg:h-48">
			{banner ? (
				<Image src={banner} alt="banner" fill={true} />
			) : (
				<div className="h-full w-full bg-cyan-600" />
			)}
		</div>
	);
};

export default Banner;
