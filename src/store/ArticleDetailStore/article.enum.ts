export enum EArticleRenderType {
	richText = 'richText',
	markdown = 'markdown',
}

export enum EArticleStatus {
	hide = 0,
	show = 1,
}

export enum EArticleDetailKey {
	title = 'title',
	intro = 'intro',
	richTextHtml = 'richTextHtml',
	richTextRaw = 'richTextRaw',
	markdown = 'markdown',
	status = 'status',
	tags = 'tags',
	renderType = 'renderType',
	draftDetail = 'draftDetail',
}

export enum EArticleEditError {
	titleError = 'titleError',
	introError = 'introError',
	tagError = 'tagError',
	contentError = 'contentError',
}
