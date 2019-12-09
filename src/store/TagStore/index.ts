import { action, computed, observable } from 'mobx';

import { TagListType } from '@/types/tag';

export default class TagStore {
	@observable
	tags: TagListType = [];

	@action.bound
	getTags() {
		this.setTags([]);
	}

	@action.bound
	setTags(tags: TagListType) {
		this.tags = tags;
	}

	@action.bound
	addTag() {
		this.tags.push({
			name: '',
			show: true,
			count: 0,
		});
	}

	@action.bound
	removeTag(index: number) {
		this.tags.splice(index, 1);
	}

	@action.bound
	changeTagName({ name, index }: { name: string; index: number }) {
		this.tags[index].name = name;
	}

	@action.bound
	changeTagShow(index: number) {
		const { show } = this.tags[index];
		this.tags[index].show = !show;
	}

	@action.bound
	filterEmptyTag() {
		this.tags = this.tags.filter(tag => tag.name);
	}

	@computed
	get hasTag() {
		return this.tagLength > 0;
	}

	@computed
	get tagLength() {
		return this.tags.length;
	}

	@computed
	get hasSameNameTag() {
		for (let i = 0; i < this.tagLength; i++) {
			const currentTag = this.tags[i];
			for (let j = i + 1; j < this.tagLength; j++) {
				const _compareTag = this.tags[j];
				if (currentTag.name === _compareTag.name) {
					return true;
				}
			}
		}
		return false;
	}
}
