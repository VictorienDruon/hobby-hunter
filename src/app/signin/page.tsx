import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignIn from "@/features/signin";

const SignInPage = async () => {
	const session = await getServerSession(authOptions);
	if (session?.user) {
		redirect("/" + session.user.name);
	}

	return <SignIn />;
};

export default SignInPage;
