export type PhotoItemType = {
	title: string;
	intro: string;
	url: string;
	show: boolean;

	_id: string;
	createAt: number;
};

export type PhotoListType = Array<PhotoItemType>;
