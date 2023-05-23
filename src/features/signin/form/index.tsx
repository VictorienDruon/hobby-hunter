import Title from "./components/Title";
import Providers from "./components/providers";
import UserAgreement from "./components/UserAgreement";

const SignInForm = () => {
	return (
		<div className="flex flex-col gap-40 p-12 md:justify-between">
			<Title />
			<Providers />
			<UserAgreement />
		</div>
	);
};

export default SignInForm;
