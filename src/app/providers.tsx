"use client";

// import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
	children: React.ReactNode;
}

const providers = ({ children }: ProvidersProps) => {
	return <>{children}</>;
};

export default providers;
