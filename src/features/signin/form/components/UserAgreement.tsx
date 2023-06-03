import Link from "next/link";

const UserAgreement = () => (
	<div className="flex w-full justify-center">
		<h3 className="max-w-lg text-center text-sm">
			By continuing, you agree to Hobby Hunter&apos;s{" "}
			<Link href="/terms-of-service" className="underline">
				Terms of Service
			</Link>{" "}
			and{" "}
			<Link href="/privacy-policy" className="underline">
				Privacy Policy
			</Link>
			.
		</h3>
	</div>
);

export default UserAgreement;
