export type CatItemType = {
	url: string;
	title: string;
	show: boolean;

	objectId: string;
	createAt: number;
};

export type CatListType = Array<CatItemType>;
