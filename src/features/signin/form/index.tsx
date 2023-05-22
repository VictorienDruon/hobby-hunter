import Title from "./components/Title";
import Providers from "./components/providers";
import UserAgreement from "./components/UserAgreement";

const Form = () => {
	return (
		<div className="flex flex-col justify-between p-12">
			<Title />
			<Providers />
			<UserAgreement />
		</div>
	);
};

export default Form;
