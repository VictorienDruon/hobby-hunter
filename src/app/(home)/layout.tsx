import Navbar from "@/components/navbar/home";
import Footer from "@/components/footer";

interface HomeLayoutProps {
	children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<>
			<Navbar />
			<div className="flex-1">{children}</div>
			<Footer />
		</>
	);
};

export default HomeLayout;
