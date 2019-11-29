import { action, observable } from 'mobx';

import { ArticleDetailType } from '@/types/article';

import { EArticleDetailKey, EArticleRenderType } from './article.enum';

export default class ArticleDetailStore {
	@observable
	detail: ArticleDetailType | null = null;

	emptyDetail: ArticleDetailType = {
		title: '',
		intro: '',
		richText: '',
		markdown: '',
		status: 1,
		tags: [],
		renderType: EArticleRenderType.richText,
	};

	@action.bound
	setDetail(detail: ArticleDetailType | null) {
		if (detail) {
			this.detail = detail;
		} else {
			this.createArticle();
		}
	}

	@action.bound
	createArticle() {
		this.detail = this.emptyDetail;
	}

	@action.bound
	changeDetail({ key, value }: { key: EArticleDetailKey; value: any }) {
		if (this.detail) {
			(this.detail[key] as any) = value;
		}
	}
}
