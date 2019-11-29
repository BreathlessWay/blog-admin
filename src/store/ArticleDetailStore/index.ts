import { action, observable } from 'mobx';

import BraftEditor from 'braft-editor';

import { ArticleDetailType } from '@/types/article';

import { EArticleDetailKey, EArticleRenderType } from './article.enum';

export default class ArticleDetailStore {
	@observable
	detail: ArticleDetailType | null = null;

	emptyDetail: ArticleDetailType = {
		title: '',
		intro: '',
		richTextHtml: '',
		richTextRaw: '',
		markdown: '',
		status: 1,
		tags: [],
		draftDetail: BraftEditor.createEditorState(null),
		renderType: EArticleRenderType.richText,
	};

	@action.bound
	setDetail(detail: ArticleDetailType | null) {
		if (detail) {
			if (detail.renderType === EArticleRenderType.richText) {
				detail.draftDetail = BraftEditor.createEditorState(detail.richTextRaw);
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
