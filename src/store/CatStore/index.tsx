import { action, observable } from 'mobx';

import ListStore from '@/store/ListStore';
import ImageStore from '@/store/ImageStore';

import { CatItemType } from '@/types/cat';

export default class CatStore extends ListStore<CatItemType> {
	@observable
	catFigure = new ImageStore();

	@action.bound
	getList() {}
}
