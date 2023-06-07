import {
	Avatar as AvatarWrapper,
	AvatarImage,
	AvatarFallback,
} from "@/components/ui/avatar";

interface AvatarProps {
	name: string;
	image: string | null;
}

const getInitials = (name: string) => {
	const subnames = name.split(" ");
	let initials = "";

	for (let i = 0; i < subnames.length; i++) {
		const initial = subnames[i].charAt(0).toUpperCase();
		initials += initial;

		if (initials.length === 3) {
			break;
		}
	}

	return initials;
};

const Avatar = ({ name, image }: AvatarProps) => {
	return (
		<AvatarWrapper className="z-10 h-20 w-20 border-2 border-background bg-background md:h-28 md:w-28 lg:h-36 lg:w-36 lg:border-4">
			<AvatarImage className="object-cover" src={image ?? undefined} />
			<AvatarFallback className="select-none text-2xl tracking-widest md:text-3xl lg:text-4xl">
				{getInitials(name)}
			</AvatarFallback>
		</AvatarWrapper>
	);
};

export default Avatar;
