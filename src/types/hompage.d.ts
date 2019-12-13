export type MenuItemType = {
	name: string;
	type: string;
	path: string;
	show: boolean;
	objectId: string;
	onlyAdmin?: boolean;
	children?: Array<{
		name: string;
		path: string;
		show: boolean;
	}>;
};

export type MenuListType = Array<MenuItemType>;
