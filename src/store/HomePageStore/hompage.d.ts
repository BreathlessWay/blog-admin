export type MenuType = {
	name: string;
	type: string;
	path: string;
	show: boolean;
	children?: Array<{
		name: string;
		path: string;
		show: boolean;
	}>;
};
