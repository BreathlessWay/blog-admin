export type CatItemType = {
	title: string;
	intro: string;
	url: string;
	show: boolean;

	objectId: string;
	createAt: number;
};

export type CatListType = Array<CatItemType>;
