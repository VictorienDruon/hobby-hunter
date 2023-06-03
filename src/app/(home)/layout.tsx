import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Navbar from "@/components/navbar/home";
import Footer from "@/components/footer";

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = async ({ children }: HomeLayoutProps) => {
	const session = await getServerSession(authOptions);
	return (
		<>
			<Navbar username={session?.user?.name} />
			<div className="flex-1">{children}</div>
			<Footer />
		</>
	);
};

export default HomeLayout;
