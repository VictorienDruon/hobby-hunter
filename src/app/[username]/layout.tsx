import Navbar from "@/components/navbar/profile";

interface ProfileLayoutProps {
	children: React.ReactNode;
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
	return (
		<>
			<Navbar />
			<div className="flex-1">{children}</div>
		</>
	);
};

export default ProfileLayout;
