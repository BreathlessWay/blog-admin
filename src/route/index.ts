import { EMenuType } from '@/store/HomePageStore/homepage.enum';

export const routeMapPath = {
	login: '/login',
	home: '/home',
	me: '/me',
	article: {
		index: '/article',
		home: '/article/index',
		tag: '/article/tag',
		create: '/article/create',
		edit: '/article/edit',
	},
	cat: '/cat',
	photography: '/photography',
};

export const baseRoute = [
	{
		name: '首页',
		type: EMenuType.home,
		path: routeMapPath.home,
		show: true,
	},
	{
		name: '我',
		type: EMenuType.user,
		path: routeMapPath.me,
		show: true,
	},
	{
		name: '文章',
		type: EMenuType.read,
		path: routeMapPath.article.index,
		show: true,
	},
	{
		name: '撸猫',
		type: EMenuType.contacts,
		path: routeMapPath.cat,
		show: true,
	},
	{
		name: '摄影',
		type: EMenuType.camera,
		path: routeMapPath.photography,
		show: true,
	},
];

export const articleRoute = [
	{ name: '文章管理', path: routeMapPath.article.home, show: true },
	{ name: '标签管理', path: routeMapPath.article.tag, show: true },
	{ name: '新建文章', path: routeMapPath.article.create, show: false },
	{ name: '编辑文章', path: routeMapPath.article.edit, show: false },
];

export const photographyRoute = [
	{ name: '摄影', path: routeMapPath.photography, show: true },
];
