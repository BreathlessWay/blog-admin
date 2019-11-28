import { EMenuType } from '@/store/HomePageStore/homepage.enum';

export const baseRoute = [
	{
		name: '首页',
		type: EMenuType.home,
		path: '/home',
		show: true,
	},
	{
		name: '我',
		type: EMenuType.user,
		path: '/me',
		show: true,
	},
	{
		name: '文章',
		type: EMenuType.read,
		path: '/article',
		show: true,
	},
	{
		name: '撸猫',
		type: EMenuType.contacts,
		path: '/cat',
		show: true,
	},
	{
		name: '摄影',
		type: EMenuType.camera,
		path: '/photography',
		show: true,
	},
];

export const articleRoute = [
	{ name: '文章管理', path: '/article/index', show: true },
	{ name: '标签管理', path: '/article/tag', show: true },
	{ name: '新建文章', path: '/article/create', show: false },
	{ name: '编辑文章', path: '/article/edit', show: false },
];

export const photographyRoute = [
	{ name: '摄影', path: '/photography', show: true },
];
