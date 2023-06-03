import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const ProfileLoading = () => {
	return (
		<>
			<Skeleton className="relative h-24 w-full sm:h-32 md:h-40 lg:h-48" />
			<main className="relative -top-10 flex flex-col gap-12 px-6 pb-12 sm:px-12 md:-top-14 md:gap-14 md:px-32 lg:-top-[4.5rem] lg:gap-16 lg:px-48">
				<div className="flex flex-col gap-3 md:gap-6 lg:gap-7">
					<Skeleton className="h-20 w-20 rounded-full border-4 border-background md:h-28 md:w-28 lg:h-36 lg:w-36" />
					<div className="flex flex-col gap-1 lg:gap-2">
						<Skeleton className="h-4 w-24 md:h-5 md:w-36 lg:h-6 lg:w-48" />
						<Skeleton className="h-3 w-16 md:h-4 md:w-24 lg:h-5 lg:w-32" />
					</div>
					<div className="flex flex-col gap-1 lg:gap-2">
						<Skeleton className="h-3 w-3/4 md:h-4 lg:h-5" />
						<Skeleton className="h-3 w-3/5 md:h-4 lg:h-5" />
					</div>
					<Separator className="my-4" />
				</div>
				<div className="flex w-full flex-col items-center gap-4 md:gap-6 lg:gap-8">
					<Skeleton className="h-44 w-full max-w-[1200px] rounded-3xl sm:h-52 md:h-60 lg:h-64" />
				</div>
			</main>
		</>
	);
};

export default ProfileLoading;
