import { action, computed, observable } from 'mobx';

import ListStore from '@/store/ListStore';

import Qs from 'qs';

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
	setQuery(query: ArticleQueryType) {
		this.query = query;
	}

	@action.bound
	changeStatus(articleIds: Array<string>, status: number) {
		this.list = this.list.map(item => {
			const { _id } = item;
			if (articleIds.includes(_id)) {
				item.status = status;
			}
			return item;
		});
	}

	@action.bound
	deleteArticle(articleIds: Array<string>) {
		this.list = this.list.filter(item => !articleIds.includes(item._id));
	}

	@computed
	get searchQuery() {
		return Qs.stringify({
			...this.query,
			...{ pageIndex: this.pageIndex, pageSize: this.pageSize },
		});
	}
}
