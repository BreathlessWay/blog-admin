export type ImageItemType = {
	title: string;
	intro?: string;
	url: string;
	objectId: string;
	show: boolean;

	createAt?: number;
	checked?: boolean;
};

export type ImageListType = Array<ImageItemType>;
