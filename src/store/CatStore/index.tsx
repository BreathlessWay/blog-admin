import { action } from 'mobx';

import ListStore from '@/store/ListStore';

import { CatItemType } from '@/types/cat';

export default class CatStore extends ListStore<CatItemType> {
	@action.bound
	getList() {
		this.setList({ results: [], count: 0 });
	}
}
