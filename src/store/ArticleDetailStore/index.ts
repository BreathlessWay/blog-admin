import { action, observable } from 'mobx';

import { ContentState, EditorState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

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
		draftDetail: EditorState.createEmpty(),
		status: 1,
		tags: [],
		renderType: EArticleRenderType.markdown,
	};

	@action.bound
	setDetail(detail: ArticleDetailType | null) {
		if (detail) {
			if (detail.renderType === EArticleRenderType.richText) {
				const blocksFromHtml = htmlToDraft(detail.richText ?? '');
				const { contentBlocks, entityMap } = blocksFromHtml;
				const contentState = ContentState.createFromBlockArray(
					contentBlocks,
					entityMap,
				);
				detail.draftDetail = EditorState.createWithContent(contentState);
			}
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
