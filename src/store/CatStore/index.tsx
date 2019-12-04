import { action, observable } from 'mobx';

import ListStore from '@/store/ListStore';
import ImageStore from '@/store/ImageStore';

import { CatItemType } from '@/types/cat';

export default class CatStore extends ListStore<CatItemType> {
	@observable
	catFigure = new ImageStore();

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
		this.catFigure.setImageList([]);
	}

	@action.bound
	changeImageInfo() {}
}
