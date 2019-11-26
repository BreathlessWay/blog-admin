import { action, computed, observable } from 'mobx';
import { TagsType } from './tag';

export default class TagStore {
	@observable
	tags: TagsType = [
		{
			name: '标签1',
			show: true,
			count: 1,
		},
		{
			name: '标签2',
			show: true,
			count: 1,
		},
		{
			name: '标签3',
			show: true,
			count: 1,
		},
	];

	@action.bound
	addTag(name: string) {
		this.tags.push({
			name,
			show: true,
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
