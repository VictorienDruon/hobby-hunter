import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import ModeToggle from "@/components/navbar/ModeToggle";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-10 border-b bg-white bg-opacity-80 backdrop-blur-md dark:bg-black dark:bg-opacity-60">
			<div className="flex w-full items-center justify-between gap-2 p-1 md:p-2">
				<Link
					href="/"
					className={`${buttonVariants({
						variant: "outline",
						size: "sm",
					})} flex items-center gap-1 md:p-5`}
				>
					<Icons.arrow className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5" />
					<p className="hidden sm:block">Back</p>
				</Link>
				<ModeToggle />
			</div>
		</nav>
	);
};

export default Navbar;
