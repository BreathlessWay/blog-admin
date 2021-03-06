import { action, computed, observable } from 'mobx';

import ListStore from '@/store/ListStore';

import { PhotoItemType, PhotoListType } from '@/types/photo';
import { AlbumItemType } from '@/types/album';

import * as Qs from 'qs';

export default class PhotoListStore extends ListStore<PhotoItemType> {
	@observable
	albumInfo: AlbumItemType | null = null;

	@observable
	column = 1;

	@action.bound
	setAlbumInfo(data: AlbumItemType | null) {
		this.albumInfo = data;
	}

	@action.bound
	setColumn(column: number) {
		if (this.column !== column) {
			this.column = column || 1;
		}
	}

	@action.bound
	setList({ list, count }: { list: PhotoListType; count: number }) {
		this.list = this.list.concat(list);
		this.count = count;
	}

	@action.bound
	setCover(id: string) {
		if (this.albumInfo) {
			this.albumInfo.cover = id;
		}
	}

	@computed
	get spliceList() {
		const { list, column } = this;
		const spliceList: Array<PhotoListType> = new Array<PhotoListType>(column);

		list.forEach((item, index) => {
			if (!spliceList[index % column]) {
				spliceList[index % column] = [];
			}
			spliceList[index % column].push(item);
		});

		return spliceList;
	}

	@computed
	get imageUrls() {
		return this.list.map(item => item.url).filter(value => value);
	}

	@computed
	get query() {
		return Qs.stringify({
			pageIndex: this.pageIndex,
			pageSize: this.pageSize,
		});
	}
}
