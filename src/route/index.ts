import { EMenuType } from '@/store/HomePageStore/homepage.enum';

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

export const baseRoute = [
	{
		name: '首页',
		type: EMenuType.home,
		path: routeMapPath.home,
		show: true,
		objectId: 'home',
	},
	{
		name: '我',
		type: EMenuType.user,
		path: routeMapPath.me,
		show: true,
		objectId: 'me',
	},
	{
		name: '文章',
		type: EMenuType.read,
		path: routeMapPath.article.index,
		show: true,
		objectId: 'article',
	},
	{
		name: '撸猫',
		type: EMenuType.contacts,
		path: routeMapPath.cat,
		show: true,
		objectId: 'cat',
	},
	{
		name: '摄影',
		type: EMenuType.camera,
		path: routeMapPath.photography.index,
		show: true,
		objectId: 'camera',
	},
	{
		name: '网站统计',
		type: EMenuType.fund,
		path: routeMapPath.statistics,
		show: false,
		objectId: 'fund',
		onlyAdmin: true,
	},
];

export const articleRoute = [
	{ name: `文章管理`, path: routeMapPath.article.home, show: true },
	{ name: '标签管理', path: routeMapPath.article.tag, show: true },
	{ name: '新建文章', path: routeMapPath.article.create, show: false },
	{ name: '编辑文章', path: routeMapPath.article.edit, show: false },
];

export const photographyRoute = [
	{ name: '相册管理', path: routeMapPath.photography.home, show: true },
	{ name: '相片管理', path: routeMapPath.photography.edit, show: false },
];
