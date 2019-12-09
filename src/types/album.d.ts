export type AlbumItemType = {
	title: string;
	show: boolean;
	count: number;

	objectId: string;
};

export type AlbumListType = Array<AlbumItemType>;
