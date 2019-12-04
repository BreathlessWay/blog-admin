export type ImageItemType = {
	title: string;
	intro?: string;
	url: string;
	objectId: string;
	show: boolean;

	createAt?: number;
};

export type ImageListType = Array<ImageItemType>;
