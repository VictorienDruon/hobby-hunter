"use client";

import { RefObject, createRef } from "react";
import useCoverflow from "@/hooks/useCoverflow";
import Cover from "./components/Cover";
import Title from "./components/Title";
import { Album, UserAlbum } from "@prisma/client";

interface CoverflowProps {
	isOwner?: boolean;
	userAlbums: (UserAlbum & {
		album: Album;
	})[];
}

interface CoverRefs {
	[key: string]: RefObject<HTMLDivElement>;
}

const Coverflow = ({ isOwner = false, userAlbums }: CoverflowProps) => {
	const coverflowRef = createRef<HTMLDivElement>();
	const coverRefs: CoverRefs = {};
	const { handleCoverflowScroll, handleCoverClick, styles, selectedAlbumId } =
		useCoverflow({
			coverflowRef,
			coverRefs,
		});
	const albums = userAlbums.map((userAlbum) => userAlbum.album);
	const selectedAlbum = albums.find((album) => album.id === selectedAlbumId);

	return (
		<div className="relative h-44 w-full max-w-[1200px] overflow-hidden rounded-3xl border-2 sm:h-52 md:h-60 lg:h-64">
			{albums.length > 0 ? (
				<>
					<div
						ref={coverflowRef}
						className="flex h-full overflow-x-scroll px-[50%] pt-5 scrollbar-hide"
						onScroll={handleCoverflowScroll}
					>
						{albums.map((album, index) => {
							coverRefs[album.id] = createRef();
							return (
								<Cover
									key={album.id}
									ref={coverRefs[album.id]}
									album={album}
									style={styles[index]}
									onClick={handleCoverClick}
								/>
							);
						})}
					</div>
					{selectedAlbum && <Title selectedAlbum={selectedAlbum} />}
				</>
			) : (
				<div className="flex h-full w-full items-center justify-center p-2">
					<p className="text-center font-normal">
						{isOwner
							? `Add albums to your library and it will appear here`
							: `This user has no album saved in his library`}
					</p>
				</div>
			)}
		</div>
	);
};

export default Coverflow;
