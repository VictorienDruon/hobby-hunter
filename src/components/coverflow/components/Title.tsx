import { Label } from "@/components/ui/label";
import { Album } from "@prisma/client";

const Title = ({ selectedAlbum }: { selectedAlbum: Album }) => {
	const { name, artist } = selectedAlbum;

	return (
		<div className="absolute bottom-1 flex w-full justify-center">
			<Label className="text-center text-xs font-normal md:text-sm lg:text-base">
				{name}
				<br />
				{artist}
			</Label>
		</div>
	);
};

export default Title;
