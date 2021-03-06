import { TagListType } from '@/types/tag';
import {
	EArticleRenderType,
	EArticleStatus,
} from '@/store/ArticleDetailStore/article.enum';
import { EditorState } from 'braft-editor';

export type ArticleQueryType = {
	keyword: string | undefined;
	startTime: number | undefined;
	endTime: number | undefined;
	status: EArticleStatus | undefined;
	tags: Array<string> | undefined;
};

export type ArticleItemType = {
	_id: string;
	title: string;
	status: number; // 0 隐藏 1 显示
	createdAt: number;
	tags: TagListType;
	key?: string;
};

export type ArticleListType = Array<ArticleItemType>;

export type ArticleDetailType = {
	title: string;
	intro: string;
	richTextHtml: string;
	richTextRaw: string;
	markdown: string;
	status: number;
	tags: Array<string>;
	renderType: EArticleRenderType;
	top: boolean;

	draftDetail?: EditorState;

	_id?: string;
	createdAt?: number;
};

export type ArticleCacheType = {
	id: string;
	data: {
		title: string;
		intro: string;
		tags: Array<string>;
		status: EArticleStatus;
		renderType: EArticleRenderType;
		detail: any;
	};
};
