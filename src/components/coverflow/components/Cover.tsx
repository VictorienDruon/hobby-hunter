import { forwardRef, CSSProperties, MouseEvent } from "react";
import Image from "next/image";
import Music from "@/types/Music";

interface CoverProps {
	music: Music;
	style: CSSProperties;
	onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const Cover = forwardRef<HTMLDivElement, CoverProps>(function Cover(
	props,
	ref
) {
	const { music, style, onClick } = props;
	const { name, artist, image } = music;
	return (
		<div ref={ref} className="relative aspect-square h-[75%]" style={style} onClick={onClick}>
			<Image
				src={image}
				alt={`${name} by ${artist}`}
				sizes="20vw"
				fill
				className="reflection rounded-2xl object-cover"
			/>
		</div>
	);
});

export default Cover;
