import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

const Navbar = () => {
	return (
		<header className="sticky top-0 z-40 border-b bg-background opacity-95 ">
			<div className="flex w-full items-center justify-between gap-2 p-2">
				<Link
					href="/"
					className={`${buttonVariants({
						variant: "outline",
						size: "lg",
					})} flex items-center gap-1`}
				>
					<Icons.arrow className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
					<p>Back</p>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
