import { action, computed, observable } from 'mobx';
import { TagsType } from './tag';

export default class TagStore {
	@observable
	tags: TagsType = [];

	@action.bound
	addTag(name: string) {
		this.tags.push({
			name,
			count: 0,
		});
	}

	@action.bound
	removeTag(index: number) {
		this.tags.splice(index, 1);
	}

	@computed
	get hasTag() {
		return this.tags.length > 0;
	}
}
