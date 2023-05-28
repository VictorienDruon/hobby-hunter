"use client";

import { useSession } from "next-auth/react";
import Home from "@/features/home";

const HomePage = () => {
	const { data: session } = useSession();
	console.log(session);
	return <Home />;
};

export default HomePage;
