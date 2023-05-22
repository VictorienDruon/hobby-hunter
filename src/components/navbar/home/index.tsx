import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import ModeToggle from "@/components/navbar/ModeToggle";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-10 border-b bg-white bg-opacity-80 px-4 backdrop-blur-md dark:bg-black dark:bg-opacity-60">
			<div className="flex w-full items-center justify-between gap-2 p-1 sm:p-2">
				<Link href="/" className="flex items-center space-x-4">
					<Icons.logo className="h-6 w-6 md:h-7 md:w-7" />
					<p className="text-md font-bold lg:text-xl">
						{siteConfig.name}
					</p>
				</Link>
				<div className="flex flex-1 items-center justify-end">
					<nav className="flex items-center gap-2 sm:gap-3 md:gap-4">
						<Link
							href={siteConfig.links.github}
							target="_blank"
							rel="noreferrer"
							className="hidden sm:block"
						>
							<div
								className={`${buttonVariants({
									size: "sm",
									variant: "ghost",
								})} sm:py-3 md:py-5`}
							>
								<Icons.github className="h-6 w-6" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<ModeToggle />
						<Link
							href={"/signin"}
							className={`${buttonVariants({
								size: "sm",
							})} sm:px-6 sm:py-3 md:px-8 md:py-5`}
						>
							Sign In
						</Link>
					</nav>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
