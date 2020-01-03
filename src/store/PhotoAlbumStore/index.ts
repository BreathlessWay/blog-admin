import { action } from 'mobx';

import ListStore from '@/store/ListStore';

import { AlbumItemType } from '@/types/album';

export default class PhotoAlbumStore extends ListStore<AlbumItemType> {
	@action.bound
	getList() {
		this.setList({ list: [], count: 0 });
	}
}
