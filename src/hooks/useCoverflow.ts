import {
	useState,
	RefObject,
	useEffect,
	CSSProperties,
	MouseEvent,
} from "react";

interface CoverRefs {
	[key: string]: RefObject<HTMLDivElement>;
}

interface UseCoverflowArgs {
	coverflowRef: RefObject<HTMLDivElement>;
	coverRefs: CoverRefs;
}

const useCoverflow = (args: UseCoverflowArgs) => {
	const [styles, setStyles] = useState<CSSProperties[]>([]);
	const [selectedMusicId, setSelectedMusicId] = useState("");
	const { coverflowRef, coverRefs } = args;

	const handleCoverflowScroll = () => {
		if (coverflowRef.current) {
			const coverflowWidth = coverflowRef.current.offsetWidth;
			const { left: coverflowLeft } =
				coverflowRef.current.getBoundingClientRect();
			let closestMusicId = null;
			let closestDistance = Infinity;
			const newStyles = Object.keys(coverRefs).map((id) => {
				const coverRef = coverRefs[id].current;
				if (coverRef) {
					const { left: coverLeft, right: coverRight } =
						coverRef.getBoundingClientRect();
					const left = coverLeft - coverflowLeft;
					const right = coverRight - coverflowLeft;
					const position = (50 * (left + right)) / coverflowWidth;
					const distanceFromCenter = Math.abs(position - 50);
					if (distanceFromCenter < closestDistance) {
						closestMusicId = id;
						closestDistance = distanceFromCenter;
					}
					const rotateY =
						position < 35
							? 45
							: position > 65
							? -45
							: -3 * position + 150;
					return {
						transform: `perspective(800px) rotateY(${rotateY}deg)`,
					};
				} else {
					return {};
				}
			});
			if (closestMusicId !== null) {
				setSelectedMusicId(closestMusicId);
			}
			setStyles(newStyles);
		}
	};

	const handleCoverClick = (e: MouseEvent<HTMLDivElement>) => {
		if (coverflowRef.current) {
			const coverflow = coverflowRef.current;
			const cover = e.currentTarget;
			const position =
				cover.offsetLeft -
				(coverflow.offsetWidth - cover.offsetWidth) / 2;
			coverflow.scrollTo({
				left: position,
				behavior: "smooth",
			});
		}
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(handleCoverflowScroll, []);

	return {
		handleCoverflowScroll,
		handleCoverClick,
		styles,
		selectedMusicId,
	};
};

export default useCoverflow;
