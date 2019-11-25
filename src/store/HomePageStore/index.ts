import { action, computed, observable } from 'mobx';

import { MenuType } from '@/store/HomePageStore/hompage';

import { getBreadcrumbNameMap } from '@/utils/path';

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

const photographyPage = [{ name: '摄影', path: '/photography', show: true }];

export default class HomePageStore {
	@observable
	menuList: Array<MenuType> = [];

	@observable
	openKeys: Array<string> = [];

	@observable
	selectedKeys: Array<string> = [];

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
	changeOpenKeys(keys: Array<string>) {
		this.openKeys = keys;
	}

	@action.bound
	changeSelectedKeys(keys: Array<string>) {
		this.selectedKeys = keys;
	}

	@action.bound
	setKeys(pathname: string) {
		this.menuList.forEach((menu, menuIndex) => {
			if (menu.children) {
				menu.children.forEach((child, childIndex) => {
					if (child.path === pathname) {
						this.openKeys = [`${menuIndex}`];
						this.selectedKeys = [`${menuIndex}-${childIndex}`];
					}
				});
			} else if (menu.path === pathname) {
				this.selectedKeys = [`${menuIndex}`];
				this.openKeys = [];
			}
		});
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
		getBreadcrumbNameMap(this.menuList, maps);
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
