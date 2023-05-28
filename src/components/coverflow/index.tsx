"use client";

import { RefObject, createRef } from "react";
import useCoverflow from "@/hooks/useCoverflow";
import Cover from "./components/Cover";
import Title from "./components/Title";
import Music from "@/types/Music";

interface CoverflowProps {
	musics: Music[];
}

interface CoverRefs {
	[key: string]: RefObject<HTMLDivElement>;
}

const Coverflow = ({ musics }: CoverflowProps) => {
	const coverflowRef = createRef<HTMLDivElement>();
	const coverRefs: CoverRefs = {};
	const { handleCoverflowScroll, handleCoverClick, styles, selectedMusicId } =
		useCoverflow({
			coverflowRef,
			coverRefs,
		});
	const selectedMusic = musics.find((music) => music.id === selectedMusicId);

	return (
		<div className="relative h-44 w-full max-w-[1200px] overflow-hidden rounded-3xl border-2 sm:h-52 md:h-60 lg:h-64">
			{musics.length > 0 ? (
				<>
					<div
						ref={coverflowRef}
						className="flex h-full overflow-x-scroll px-[50%] pt-5 scrollbar-hide"
						onScroll={handleCoverflowScroll}
					>
						{musics.map((music, index) => {
							coverRefs[music.id] = createRef();
							return (
								<Cover
									key={music.id}
									ref={coverRefs[music.id]}
									music={music}
									style={styles[index]}
									onClick={handleCoverClick}
								/>
							);
						})}
					</div>
					{selectedMusic && <Title selectedMusic={selectedMusic} />}
				</>
			) : (
				<div className="flex h-full w-full items-center justify-center">
					<p className="font-normal">You have no music saved.</p>
				</div>
			)}
		</div>
	);
};

export default Coverflow;
