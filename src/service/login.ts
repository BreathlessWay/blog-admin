import UserStore from '@/store/UserStore';
import HomePageStore, { EMenuType } from '@/store/HomePageStore';
import * as H from 'history';

import { storage } from '@/utils';

const mockMenu = [
	{
		name: '文章',
		type: EMenuType.read,
		path: '/article',
		show: true,
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
	},
];

export const getMenu = ({
	homepageStore,
	pathname,
	isLoginPage,
}: {
	homepageStore: HomePageStore;
	pathname: string;
	isLoginPage?: boolean;
}) => {
	// get menu
	homepageStore.setMenuList(mockMenu);
	const _pathname = isLoginPage ? homepageStore.firstMenu.path : pathname;
	homepageStore.setKeys(_pathname);
};

export const login = async ({
	userStore,
	homepageStore,
	history,
	isLoginPage,
	token,
}: {
	userStore: UserStore;
	homepageStore: HomePageStore;
	history: H.History;
	isLoginPage?: boolean;
	token?: string;
}) => {
	let _token;
	if (token) {
		_token = token;
	} else {
		const storageToken = storage.get('token');
		// 验证token是否有效
		_token = storageToken;
	}
	if (_token) {
		userStore.login(_token);
		getMenu({
			homepageStore,
			pathname: history.location.pathname,
			isLoginPage,
		});
		if (isLoginPage) {
			history.replace(homepageStore.firstMenu.path);
		}
	} else {
		history.push('/login');
	}
};
