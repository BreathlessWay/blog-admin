import { action, computed } from 'mobx';

import ListStore from '@/store/ListStore';

import { AlbumItemType } from '@/types/album';
import * as Qs from 'qs';

export default class PhotoAlbumStore extends ListStore<AlbumItemType> {
	@action.bound
	getList() {
		this.setList({ list: [], count: 0 });
	}

	@computed
	get query() {
		return Qs.stringify({
			pageIndex: this.pageIndex,
			pageSize: this.pageSize,
		});
	}

	@computed
	get isFullPage() {
		return this.list.length === this.pageSize;
	}
}
