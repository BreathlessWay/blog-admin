export type AlbumItemType = {
	title: string;
	show: boolean;
	count: number;
	cover?: string;

	objectId: string;
};

export type AlbumListType = Array<AlbumItemType>;
