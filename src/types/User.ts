export interface User {
	name: string;
	username: string;
	image: string;
	infos: UserInfos;
}

export interface UserInfos {
	bio?: string;
	job?: string;
	location?: string;
	website?: string;
	twitter?: string;
	github?: string;
	joinedIn: string;
	following: number;
	follower: number;
}
