import { action, observable } from 'mobx';

import { ArticleDetailType } from '@/types/article';
import { EArticleRenderType } from './article.enum';

export default class ArticleDetailStore {
	@observable
	detail: ArticleDetailType | null = null;

	emptyDetail: ArticleDetailType = {
		title: '',
		intro: '',
		detail: '',
		status: true,
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
}
