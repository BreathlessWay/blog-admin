export type FigureItemType = {
	title: string;
	intro?: string;
	url: string;
	objectId: string;
	show: boolean;

	createAt?: number;
};

export type FigureListType = Array<FigureItemType>;
