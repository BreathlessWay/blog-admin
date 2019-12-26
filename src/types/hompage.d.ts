import { EMenuType } from '@/store/HomePageStore/homepage.enum';

export type MenuItemType = {
	name: string;
	type: EMenuType;
	path: string;
	show: boolean;
	onlyAdmin: boolean;
	children?: Array<{
		name: string;
		path: string;
		show: boolean;
	}>;
};

export type MenuListType = Array<MenuItemType>;
