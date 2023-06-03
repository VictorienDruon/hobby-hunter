import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { UserInfos } from "@prisma/client";

interface DetailsProps {
	joinedIn: string;
	infos: UserInfos | null;
}

const DetailClassName = "mr-3 flex items-center gap-1";
const IconClassName = "h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5";

const getBaseURL = (url: string) => {
	const urlObject = new URL(url);
	return urlObject.hostname;
};

const Details = ({ joinedIn, infos }: DetailsProps) => {
	return (
		<div className="flex flex-wrap text-muted-foreground sm:max-w-[70%]">
			{infos?.job && (
				<div className={DetailClassName}>
					<Icons.briefcase className={IconClassName} />

					<p>{infos.job}</p>
				</div>
			)}
			{infos?.location && (
				<div className={DetailClassName}>
					<Icons.pin className={IconClassName} />

					<p>{infos.location}</p>
				</div>
			)}
			{infos?.website && (
				<Link href={infos.website} target="_blank" rel="noreferrer">
					<div className={DetailClassName}>
						<Icons.link className={IconClassName} />
						<p>{getBaseURL(infos.website)}</p>
					</div>
				</Link>
			)}
			{infos?.twitter && (
				<Link
					href={"https://twitter.com/" + infos.twitter}
					target="_blank"
					rel="noreferrer"
				>
					<div className={DetailClassName}>
						<Icons.twitter className={IconClassName} />
						<p>{infos.twitter}</p>
					</div>
				</Link>
			)}
			{infos?.github && (
				<Link
					href={"https://github.com/" + infos.github}
					target="_blank"
					rel="noreferrer"
				>
					<div className={DetailClassName}>
						<Icons.github className={IconClassName} />
						<p>{infos.github}</p>
					</div>
				</Link>
			)}
			<div className={DetailClassName}>
				<Icons.calendar className={IconClassName} />
				Joined {joinedIn}
			</div>
		</div>
	);
};

export default Details;
