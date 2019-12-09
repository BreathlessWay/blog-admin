export type PhotoItemType = {
	title: string;
	intro: string;
	url: string;
	show: boolean;

	objectId: string;
	createAt: number;
};

export type PhotoListType = Array<PhotoItemType>;
