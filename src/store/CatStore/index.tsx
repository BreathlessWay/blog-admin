import { action, observable } from 'mobx';

import ListStore from '@/store/ListStore';

import { CatItemType } from '@/types/cat';
import { FigureItemType, FigureListType } from '@/types/figure';

export default class CatStore extends ListStore<CatItemType> {
	@observable
	catFigure: FigureListType = [];

	@action.bound
	getList() {
		this.setList({ results: [], count: 0 });
	}

	@action.bound
	removeCatFigure(index: number) {
		this.catFigure.splice(index, 1);
	}

	@action.bound
	addCatFigure(params: FigureItemType) {
		this.catFigure.push(params);
	}

	@action.bound
	setShowCatFigure(index: number) {
		this.catFigure.forEach((item, i) => {
			item.show = i === index;
		});
	}
}
