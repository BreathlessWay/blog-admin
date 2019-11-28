import { action, computed, observable } from 'mobx';

import { MenuItemType, MenuListType } from '@/types/hompage';

import { EMenuType } from '@/store/HomePageStore/homepage.enum';

import { articleRoute, photographyRoute } from '@/route';

import { getBreadcrumbNameMap } from '@/utils/path';

export default class HomePageStore {
	@observable
	menuList: MenuListType = [];

	@observable
	openKeys: Array<string> = [];

	@observable
	selectedKeys: Array<string> = [];

	@action.bound
	setMenuList(list: MenuListType) {
		this.menuList = list;
		this.menuList.forEach(item => {
			if (item.type === EMenuType.read) {
				item.children = articleRoute;
			}
			if (item.type === EMenuType.camera) {
				item.children = photographyRoute;
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
		item: MenuItemType;
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
		let _firstMenu = {
			path: '/home',
		} as MenuItemType;
		if (this.menuList.length) {
			_firstMenu = this.menuList[0];
			if (_firstMenu.children && _firstMenu.children.length) {
				_firstMenu = _firstMenu.children[0] as MenuItemType;
			}
			return _firstMenu;
		}
		return _firstMenu;
	}
}
