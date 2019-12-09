import { action } from 'mobx';

import ListStore from '@/store/ListStore';

import { PhotoItemType, PhotoListType } from '@/types/photo';

export default class PhotoListStore extends ListStore<PhotoItemType> {
	@action.bound
	getList() {
		this.setList({ results: [], count: 0 });
	}

	@action.bound
	setList({ results, count }: { results: PhotoListType; count: number }) {
		this.list = this.list.concat(results);
		this.count = count;
	}
}
