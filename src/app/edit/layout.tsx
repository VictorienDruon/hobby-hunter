import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Navbar from "@/components/navbar/dashboard";

interface EditLayoutProps {
	children: React.ReactNode;
}

const EditLayout = async ({ children }: EditLayoutProps) => {
	const session = await getServerSession(authOptions);

	return (
		<>
			<Navbar href={"/" + session?.user?.name} />
			<div className="flex-1">{children}</div>
		</>
	);
};

export default EditLayout;
