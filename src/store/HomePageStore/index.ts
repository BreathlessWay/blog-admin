import { action, computed, observable } from 'mobx';

import { MenuType } from '@/store/HomePageStore/hompage';

import { getMapRoute } from '@/utils/path';

export enum EMenuType {
	home = 'home',
	user = 'user',
	read = 'read',
	contacts = 'contacts',
	camera = 'camera',
}

const articlePage = [
	{ name: '文章管理', path: '/article', show: true },
	{ name: '标签管理', path: '/article/tag', show: true },
	{ name: '新建文章', path: '/article/create', show: false },
	{ name: '编辑文章', path: '/article/edit', show: false },
];

const photographyPage = [
	{ name: '摄影', path: '/article', show: true },
	{ name: '相册管理', path: '/photography/tag', show: true },
	{ name: '新建文章', path: '/article/create', show: false },
	{ name: '编辑文章', path: '/article/edit', show: false },
];

export default class HomePageStore {
	@observable
	menuList: Array<MenuType> = [
		{
			name: '文章',
			type: EMenuType.read,
			path: '/article',
			show: true,
			children: articlePage,
		},
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
			children: photographyPage,
		},
	];

	@action
	setMenuList(list: Array<MenuType>) {
		this.menuList = list;
		this.menuList.forEach(item => {
			if (item.type === EMenuType.read) {
				item.children = articlePage;
			}
		});
	}

	@action
	changeMenu({
		item,
		value,
		type = 'input',
	}: {
		item: MenuType;
		value: any;
		type?: 'input' | 'checkbox';
	}) {
		this.menuList.forEach(menu => {
			if (menu.type === item.type) {
				if (type === 'input') {
					menu.name = value;
				}
				if (type === 'checkbox') {
					menu.show = value;
				}
			}
		});
	}

	@action
	sortMenuList(dragIndex: number, hoverIndex: number) {
		const dragItem = this.menuList.splice(dragIndex, 1);
		this.menuList.splice(hoverIndex, 0, ...dragItem);
	}

	@computed
	get breadcrumbNameMap() {
		const maps: Record<string, string> = {};
		getMapRoute(this.menuList, maps);
		return maps;
	}

	@computed
	get firstMenu() {
		return this.menuList[0];
	}
}
