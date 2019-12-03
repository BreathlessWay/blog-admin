import { action, observable } from 'mobx';

import ListStore from '@/store/ListStore';
import FigureStore from '@/store/FigureStore';

import { CatItemType } from '@/types/cat';

export default class CatStore extends ListStore<CatItemType> {
	@observable
	catFigure = new FigureStore();

	@action.bound
	getList() {
		this.setList({
			results: [
				{
					title: '图片图片图片图片图片图片图片图片图片图片图片图片图片图片',
					intro:
						'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
					createAt: 1575372223416,
					objectId: 'objectId',
					show: true,
					url:
						'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
				},
			],
			count: 0,
		});
	}

	@action.bound
	setCatFigure() {
		this.catFigure.setFigureList([]);
	}
}
