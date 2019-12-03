import { action, computed, observable } from 'mobx';

import ListStore from '@/store/ListStore';

import { ArticleQueryType, ArticleItemType } from '@/types/article';

import { EArticleStatus } from '@/store/ArticleDetailStore/article.enum';

export default class ArticleListStore extends ListStore<ArticleItemType> {
	@observable
	query: ArticleQueryType = {
		keyword: undefined,
		startTime: undefined,
		endTime: undefined,
		status: EArticleStatus.show,
		tags: undefined,
	};

	@action.bound
	getList() {
		// results.forEach(item => (item.key = item.objectId));
		this.setList({
			results: [],
			count: 0,
		});
	}

	@action.bound
	setQuery(query: ArticleQueryType) {
		this.query = query;
	}

	@action.bound
	changeStatus(articleIds: Array<string>, status: number) {
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
}
