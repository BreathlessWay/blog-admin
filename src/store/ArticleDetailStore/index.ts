import { action, observable } from 'mobx';

import { ArticleDetailType } from '@/types/article';

import { EArticleDetailType, EArticleRenderType } from './article.enum';

export default class ArticleDetailStore {
	@observable
	detail: ArticleDetailType | null = null;

	emptyDetail: ArticleDetailType = {
		title: '',
		intro: '',
		detail: '',
		status: 1,
		tags: [],
		renderType: EArticleRenderType.richText,
	};

	@action.bound
	setDetail(detail: ArticleDetailType | null) {
		this.detail = detail;
	}

	@action.bound
	createArticle() {
		this.detail = this.emptyDetail;
	}

	@action.bound
	changeDetail({ key, value }: { key: EArticleDetailType; value: any }) {
		if (this.detail) {
			(this.detail[key] as any) = value;
		}
	}
}
