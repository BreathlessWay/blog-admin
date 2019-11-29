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
	status: EArticleStatus;
	tags: Array<string> | undefined;
};

export type ArticleItemType = {
	objectId: string;
	title: string;
	status: number;
	createAt: number;
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
	tags: TagListType;
	renderType: EArticleRenderType;

	draftDetail?: EditorState;

	objectId?: string;
	createAt?: number;
};
