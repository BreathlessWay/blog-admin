export type MenuItemType = {
	name: string;
	type: string;
	path: string;
	show: boolean;
	_id: string;
	onlyAdmin?: boolean;
	children?: Array<{
		name: string;
		path: string;
		show: boolean;
	}>;
};

export type MenuListType = Array<MenuItemType>;
