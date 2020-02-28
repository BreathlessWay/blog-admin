import { computed, observable } from 'mobx';

import * as Qs from 'qs';

import ListStore from '@/store/ListStore';
import ImageStore from '@/store/ImageStore';

import { CatItemType } from '@/types/cat';

export default class CatStore extends ListStore<CatItemType> {
	@observable
	catFigure = new ImageStore();

	@computed
	get query() {
		return Qs.stringify({
			pageIndex: this.pageIndex,
			pageSize: this.pageSize,
		});
	}
}
