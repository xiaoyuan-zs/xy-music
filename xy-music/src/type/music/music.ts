export interface Info {
	id: number;
	name: string;
	auther: string;
	picUrl: string;
	mp3url: string;
}

export interface RootObject {
	success: boolean;
	sort: string;
	info: Info;
}