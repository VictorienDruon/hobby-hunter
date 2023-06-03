"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";

interface ProvidersProps {
	children: React.ReactNode;
}

const providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<SessionProvider>{children}</SessionProvider>
			<Toaster />
		</ThemeProvider>
	);
};

export default providers;
