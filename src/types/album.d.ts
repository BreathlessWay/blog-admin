export type AlbumItemType = {
	title: string;
	show: boolean;
	count: number;
	cover?: string;

	checked?: boolean;

	objectId: string;
};

export type AlbumListType = Array<AlbumItemType>;
