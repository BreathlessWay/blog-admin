import { TagListType } from '@/store/TagStore/tag';

export type ArticleQueryType = {
	keyword: string | undefined;
	startTime: number | undefined;
	endTime: number | undefined;
	status: boolean;
	tags: Array<string> | undefined;
};

export type ArticleItemType = {
	objectId: string;
	title: string;
	status: boolean;
	createAt: number;
	tags: TagListType;
	key?: string;
};

export type ArticleListType = Array<ArticleItemType>;
