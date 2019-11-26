import { action, computed, observable } from 'mobx';
import { TagsType } from './tag';

export default class TagStore {
	@observable
	tags: TagsType = [];

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
		return this.tags.length > 0;
	}
}
