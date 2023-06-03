import Navbar from "@/components/navbar/dashboard";

interface ProfileLayoutProps {
	children: React.ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
	return (
		<>
			<Navbar href="/" />
			<div className="flex-1">{children}</div>
		</>
	);
};

export default ProfileLayout;
