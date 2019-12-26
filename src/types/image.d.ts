export type ImageItemType = {
	title: string;
	intro?: string;
	url: string;
	_id: string;
	show: boolean;

	createAt?: number;
	checked?: boolean;
};

export type ImageListType = Array<ImageItemType>;
