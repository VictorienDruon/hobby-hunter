"use client";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
	children: React.ReactNode;
}

const providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
			<Toaster />
		</ThemeProvider>
	);
};

export default providers;
