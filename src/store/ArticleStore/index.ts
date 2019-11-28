import { action, computed, observable } from 'mobx';

import ListStore from '@/store/ListStore';

import { ArticleQueryType, ArticleListType } from '../../types/article';

export default class ArticleStore extends ListStore {
	@observable
	list: ArticleListType = [];

	@observable
	query: ArticleQueryType = {
		keyword: undefined,
		startTime: undefined,
		endTime: undefined,
		status: true,
		tags: undefined,
	};

	@action.bound
	setList(result: { list: ArticleListType; count: number }) {
		result.list.forEach(item => (item.key = item.objectId));
		this.list = result.list;
		this.count = result.count;
	}

	@action.bound
	setQuery(query: ArticleQueryType) {
		this.query = query;
	}

	@action.bound
	changeStatus(articleIds: Array<string>, status: boolean) {
		this.list = this.list.map(item => {
			const { objectId } = item;
			if (articleIds.includes(objectId)) {
				item.status = status;
			}
			return item;
		});
	}

	@action.bound
	deleteArticle(articleIds: Array<string>) {
		this.list = this.list.filter(item => !articleIds.includes(item.objectId));
	}

	@computed
	get searchQuery() {
		return JSON.stringify({
			...this.query,
			...{ pageIndex: this.pageIndex, pageSize: this.pageSize },
		});
	}

	@computed
	get isEmpty() {
		return !this.list.length;
	}
}
