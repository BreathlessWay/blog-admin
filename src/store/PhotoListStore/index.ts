import { action, computed, observable } from 'mobx';

import ListStore from '@/store/ListStore';

import { PhotoItemType, PhotoListType } from '@/types/photo';

// import array from './data';

export default class PhotoListStore extends ListStore<PhotoItemType> {
	@observable
	column = 1;

	@action.bound
	setColumn(column: number) {
		if (this.column !== column) {
			this.column = column;
		}
	}

	@action.bound
	getList() {
		// this.setList({ results: array, count: array.length });
	}

	@action.bound
	setList({ results, count }: { results: PhotoListType; count: number }) {
		this.list = this.list.concat(results);
		this.count = count;
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
}