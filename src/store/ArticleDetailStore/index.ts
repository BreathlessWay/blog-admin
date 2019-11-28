import { action, observable } from 'mobx';

import { ContentState, EditorState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

import { ArticleDetailType } from '@/types/article';

import { EArticleDetailType, EArticleRenderType } from './article.enum';

export default class ArticleDetailStore {
	@observable
	detail: ArticleDetailType | null = null;

	emptyDetail: ArticleDetailType = {
		title: '',
		intro: '',
		detail: '',
		draftDetail: EditorState.createEmpty(),
		status: 1,
		tags: [],
		renderType: EArticleRenderType.richText,
	};

	@action.bound
	setDetail(detail: ArticleDetailType | null) {
		if (detail) {
			const blocksFromHtml = htmlToDraft(detail?.detail ?? '');
			const { contentBlocks, entityMap } = blocksFromHtml;
			const contentState = ContentState.createFromBlockArray(
				contentBlocks,
				entityMap,
			);
			detail.draftDetail = EditorState.createWithContent(contentState);
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
	changeDetail({ key, value }: { key: EArticleDetailType; value: any }) {
		if (this.detail) {
			(this.detail[key] as any) = value;
		}
	}
}
