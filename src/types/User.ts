import { Theme } from "@/features/profile/banner/themes";

export interface User {
	name: string;
	username: string;
	image: string;
	infos: UserInfos;
}

export interface UserInfos {
	joinedIn: string;
	following: number;
	follower: number;
	job: string;
	bio: string;
	location: string;
	website: string;
	twitter: string;
	github: string;
	theme: Theme;
}
