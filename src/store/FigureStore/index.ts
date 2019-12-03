import { action, computed, observable } from 'mobx';
import { FigureItemType, FigureListType } from '@/types/figure';

export default class FigureStore {
	@observable
	figureList: FigureListType = [];

	@action.bound
	setFigureList(list: FigureListType) {
		if (list) {
			this.figureList = list;
		}
	}

	@action.bound
	removeFigure(index: number) {
		this.figureList.splice(index, 1);
	}

	@action.bound
	addFigure(params: FigureItemType) {
		this.figureList.push(params);
	}

	@action.bound
	setShowFigure(index: number) {
		this.figureList.forEach((item, i) => {
			item.show = i === index;
		});
	}

	@computed
	get figureLength() {
		return this.figureList.length;
	}
}
