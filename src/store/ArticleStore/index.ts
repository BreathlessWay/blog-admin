import { action, computed, observable } from 'mobx';

import ListStore from '@/store/ListStore';

import { ArticleQueryType } from './article';

export default class ArticleStore extends ListStore {
	limit = 20;

	@observable
	list: Array<any> = [];

	@observable
	query: ArticleQueryType = {
		keyword: undefined,
		startTime: undefined,
		endTime: undefined,
		status: true,
		tags: undefined,
	};

	@action.bound
	setList(result: { list: Array<any>; count: number }) {
		this.list = result.list;
		this.count = result.count;
	}

	@action.bound
	setQuery(query: ArticleQueryType) {
		this.query = query;
	}

	@computed
	get searchQuery() {
		return JSON.stringify({
			...this.query,
			...{ pageIndex: this.pageIndex, pageSize: this.limit },
		});
	}
}
