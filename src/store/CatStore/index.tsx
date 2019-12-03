import { action, observable } from 'mobx';

import ListStore from '@/store/ListStore';
import FigureStore from '@/store/FigureStore';

import { CatItemType } from '@/types/cat';

export default class CatStore extends ListStore<CatItemType> {
	@observable
	catFigure = new FigureStore();

	@action.bound
	getList() {
		this.setList({ results: [], count: 0 });
	}

	@action.bound
	setCatFigure() {
		this.catFigure.setFigureList([]);
	}
}
