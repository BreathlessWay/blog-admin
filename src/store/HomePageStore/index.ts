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
	{ name: '摄影', path: '/photography', show: true },
	{ name: '相册管理', path: '/photography/tag', show: true },
	{ name: '新建文章', path: '/photography/create', show: false },
	{ name: '编辑文章', path: '/photography/edit', show: false },
];

const hasChildrenMenuPath = ['/article', '/photography'];

export default class HomePageStore {
	@observable
	menuList: Array<MenuType> = [];

	@observable
	defaultOpenKeys: Array<string> = [];

	@observable
	defaultSelectedKeys: Array<string> = [];

	@action.bound
	setMenuList(list: Array<MenuType>) {
		this.menuList = list;
		this.menuList.forEach(item => {
			if (item.type === EMenuType.read) {
				item.children = articlePage;
			}
			if (item.type === EMenuType.camera) {
				item.children = photographyPage;
			}
		});
	}

	@action.bound
	setKeys(pathname: string) {
		const matchIndex = this.menuList.findIndex(item =>
			pathname.startsWith(item.path),
		);
		let flag = false;
		hasChildrenMenuPath.forEach(menu => {
			if (pathname.startsWith(menu)) {
				this.defaultOpenKeys = [`${matchIndex}`];
				const { children } = this.menuList[matchIndex];
				if (children && children.length) {
					const childIndex = children.findIndex(
						child => child.path === pathname,
					);
					this.defaultSelectedKeys = [`${matchIndex}-${childIndex}`];
				}
				flag = true;
			}
		});

		if (!flag) {
			this.defaultSelectedKeys = [`${matchIndex}`];
			this.defaultOpenKeys = [];
		}
	}

	@action.bound
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

	@action.bound
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
		if (this.menuList.length) {
			return this.menuList[0];
		}
		return {
			path: '/home',
		};
	}
}
