export type FigureItemType = {
	url: string;
	title: string;
	objectId: string;
	show: boolean;

	createAt?: number;
};

export type FigureListType = Array<FigureItemType>;
