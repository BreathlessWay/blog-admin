export type CatItemType = {
	title: string;
	intro: string;
	url: string;
	show: boolean;

	objectId: string;
	createAt: number;

	checked?: boolean;
};

export type CatListType = Array<CatItemType>;
