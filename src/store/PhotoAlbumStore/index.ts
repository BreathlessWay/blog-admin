import { action } from 'mobx';

import ListStore from '@/store/ListStore';

import { AlbumItemType } from '@/types/album';

import { data } from './data';

export default class PhotoAlbumStore extends ListStore<AlbumItemType> {
	@action.bound
	getList() {
		this.setList({ results: data, count: data.length });
		// this.setList({ results: [], count: 0 });
	}
}
