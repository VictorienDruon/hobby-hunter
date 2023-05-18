import Link from "next/link";
import { Icons } from "@/components/ui/icons";

interface DetailProps {
	children: React.ReactNode;
}

interface DetailsProps {
	job?: string;
	location?: string;
	website?: string;
	twitter?: string;
	github?: string;
	joinedIn: string;
}

const Detail = ({ children }: DetailProps) => {
	return <div className="mr-3 flex items-center gap-1">{children}</div>;
};

const IconClassName = "h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5";

const getBaseURL = (url: string) => {
	const urlObject = new URL(url);
	return urlObject.hostname;
};

const Details = ({
	job,
	location,
	website,
	twitter,
	github,
	joinedIn,
}: DetailsProps) => {
	return (
		<div className="flex flex-wrap text-muted-foreground sm:max-w-[70%]">
			{job && (
				<Detail>
					<Icons.briefcase className={IconClassName} />

					<p>{job}</p>
				</Detail>
			)}
			{location && (
				<Detail>
					<Icons.pin className={IconClassName} />

					<p>{location}</p>
				</Detail>
			)}
			{website && (
				<Link href={website} target="_blank" rel="noreferrer">
					<Detail>
						<Icons.link className={IconClassName} />
						<p>{getBaseURL(website)}</p>
					</Detail>
				</Link>
			)}
			{twitter && (
				<Link
					href={"https://twitter.com/" + twitter}
					target="_blank"
					rel="noreferrer"
				>
					<Detail>
						<Icons.twitter className={IconClassName} />
						<p>{twitter}</p>
					</Detail>
				</Link>
			)}
			{github && (
				<Link
					href={"https://github.com/" + github}
					target="_blank"
					rel="noreferrer"
				>
					<Detail>
						<Icons.github className={IconClassName} />
						<p>{github}</p>
					</Detail>
				</Link>
			)}
			<Detail>
				<Icons.calendar className={IconClassName} />
				Joined {joinedIn}
			</Detail>
		</div>
	);
};

export default Details;
