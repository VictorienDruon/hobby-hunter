import Navbar from "@/components/navbar/edit";

interface EditLayoutProps {
	children: React.ReactNode;
}

const EditLayout = ({ children }: EditLayoutProps) => {
	return (
		<>
			<Navbar />
			<div className="flex-1">{children}</div>
		</>
	);
};

export default EditLayout;
