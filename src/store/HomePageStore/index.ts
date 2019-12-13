import { action, computed, observable } from 'mobx';

import { MenuItemType, MenuListType } from '@/types/hompage';

import { EMenuType } from '@/store/HomePageStore/homepage.enum';

import { articleRoute, photographyRoute, routeMapPath } from '@/route';

import { getBreadcrumbNameMap } from '@/utils/path';

export default class HomePageStore {
	@observable
	_menuList: MenuListType = [];

	@observable
	openKeys: Array<string> = [];

	@observable
	selectedKeys: Array<string> = [];

	@action.bound
	setMenuList(list: MenuListType) {
		this._menuList = list;
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
						this.selectedKeys = child.show
							? [`${menuIndex}-${childIndex}`]
							: [`${menuIndex}-${0}`];
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
		this._menuList.forEach(menu => {
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
		const dragItem = this._menuList.splice(dragIndex, 1);
		this._menuList.splice(hoverIndex, 0, ...dragItem);
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
			path: routeMapPath.home,
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

	@computed
	get catAlias() {
		const item = this.menuList.find(menu => menu.type === EMenuType.contacts);
		return item?.name ?? '';
	}

	@computed
	get articleAlias() {
		const item = this.menuList.find(menu => menu.type === EMenuType.read);
		return item?.name ?? '';
	}

	@computed
	get menuList() {
		return this._menuList.map(item => {
			if (item.type === EMenuType.read) {
				return { ...item, ...{ children: articleRoute(item.name) } };
			}
			if (item.type === EMenuType.camera) {
				return { ...item, ...{ children: photographyRoute } };
			}
			return item;
		});
	}
}
