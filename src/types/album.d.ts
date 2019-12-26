export type AlbumItemType = {
	title: string;
	show: boolean;
	count: number;
	cover?: string;

	checked?: boolean;

	_id: string;
};

export type AlbumListType = Array<AlbumItemType>;
