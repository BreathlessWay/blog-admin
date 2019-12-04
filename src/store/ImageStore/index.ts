import { action, computed, observable } from 'mobx';
import { ImageItemType, ImageListType } from '@/types/image';

export default class ImageStore {
	@observable
	ImageList: ImageListType = [];

	@action.bound
	setImageList(list: ImageListType) {
		if (list) {
			this.ImageList = list;
		}
	}

	@action.bound
	removeImage(index: number) {
		this.ImageList.splice(index, 1);
	}

	@action.bound
	addImage(params: ImageItemType) {
		this.ImageList.push(params);
	}

	@action.bound
	setShowImage(index: number) {
		this.ImageList.forEach((item, i) => {
			item.show = i === index;
		});
	}

	@computed
	get imageListLength() {
		return this.ImageList.length;
	}
}
