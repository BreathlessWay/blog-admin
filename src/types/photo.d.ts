export type PhotoItemType = {
	title: string;
	intro: string;
	url: string;
	show: boolean;

	_id: string;
	createdAt: number;
};

export type PhotoListType = Array<PhotoItemType>;
