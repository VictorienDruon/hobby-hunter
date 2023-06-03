import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
};

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
