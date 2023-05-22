import Navbar from "@/components/navbar/dashboard";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return (
		<>
			<Navbar />
			<div className="flex-1">{children}</div>
		</>
	);
};

export default DashboardLayout;
