import { Label } from "@/components/ui/label";
import Music from "@/types/Music";

const Title = ({ selectedMusic }: { selectedMusic: Music }) => {
	const { name, artist } = selectedMusic;

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
