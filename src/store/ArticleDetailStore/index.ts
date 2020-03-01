import { action, observable } from 'mobx';

import BraftEditor from 'braft-editor';

import { ArticleDetailType } from '@/types/article';

import {
	EArticleDetailKey,
	EArticleEditError,
	EArticleRenderType,
} from './article.enum';

export default class ArticleDetailStore {
	@observable
	error = {
		titleError: false,
		introError: false,
		tagError: false,
		contentError: false,
	};

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
		top: false,
		draftDetail: BraftEditor.createEditorState(null),
		renderType: EArticleRenderType.richText,
	};

	@action.bound
	setDetail(detail: Partial<ArticleDetailType> | null) {
		this.createArticle();
		if (detail) {
			if (detail.renderType === EArticleRenderType.richText) {
				detail.draftDetail = BraftEditor.createEditorState(detail.richTextRaw);
			}
			(this.detail as any) = { ...this.detail, ...detail };
		}
	}

	@action.bound
	createArticle() {
		if (!this.detail) {
			this.detail = { ...this.emptyDetail };
		}
	}

	@action.bound
	changeDetail({ key, value }: { key: EArticleDetailKey; value: any }) {
		if (this.detail) {
			(this.detail[key] as any) = value;
		}
	}

	@action.bound
	validError({ key, value }: { key: EArticleEditError; value: boolean }) {
		this.error[key] = value;
	}

	@action.bound
	resetError() {
		this.error = {
			titleError: false,
			introError: false,
			tagError: false,
			contentError: false,
		};
	}

	@action.bound
	resetDetail() {
		this.detail = null;
	}
}
