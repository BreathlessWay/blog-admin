export type ArticleQueryType = {
	keyword: string | undefined;
	startTime: number | undefined;
	endTime: number | undefined;
	status: boolean;
	tags: Array<string> | undefined;
};
