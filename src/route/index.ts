// export const prePath = process.env.PUBLIC_URL;

export const prePath = '';

export const routeMapPath = {
	login: `${prePath}/login`,
	home: `${prePath}/home`,
	me: `${prePath}/me`,
	article: {
		index: `${prePath}/article`,
		home: `${prePath}/article/index`,
		tag: `${prePath}/article/tag`,
		create: `${prePath}/article/create`,
		edit: `${prePath}/article/edit`,
	},
	cat: `${prePath}/cat`,
	photography: {
		index: `${prePath}/photography`,
		home: `${prePath}/photography/index`,
		edit: `${prePath}/photography/edit`,
	},
	statistics: `${prePath}/statistics`,
};

export const articleRoute = (articleAlias: string) => [
	{ name: `${articleAlias}管理`, path: routeMapPath.article.home, show: true },
	{ name: '标签管理', path: routeMapPath.article.tag, show: true },
	{
		name: `新建${articleAlias}`,
		path: routeMapPath.article.create,
		show: false,
	},
	{ name: `编辑${articleAlias}`, path: routeMapPath.article.edit, show: false },
];

export const photographyRoute = [
	{ name: '相册管理', path: routeMapPath.photography.home, show: true },
	{ name: '相片管理', path: routeMapPath.photography.edit, show: false },
];
