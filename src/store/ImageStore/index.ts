import { action, computed, observable } from 'mobx';
import { ImageItemType, ImageListType } from '@/types/image';

export default class ImageStore {
	@observable
	imageList: ImageListType = [];

	@action.bound
	setImageList(list: ImageListType) {
		if (list) {
			this.imageList = list;
		}
	}

	@action.bound
	removeImage(item: ImageItemType) {
		this.imageList = this.imageList.filter(
			image => image.objectId !== item.objectId,
		);
	}

	@action.bound
	addImage(item: ImageItemType) {
		this.imageList.push(item);
	}

	@action.bound
	setShowImage(item: ImageItemType) {
		this.imageList.forEach(image => {
			image.show = image.objectId === item.objectId;
		});
	}

	@computed
	get imageListLength() {
		return this.imageList.length;
	}
}
