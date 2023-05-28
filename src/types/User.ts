import { Theme } from "@/features/profile/banner/themes";
import Music from "./Music";

export interface User {
	name: string;
	username: string;
	image: string;
	infos: UserInfos;
	musics: Music[];
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
