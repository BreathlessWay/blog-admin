import UserStore from '@/store/UserStore';
import HomePageStore from '@/store/HomePageStore';
import * as H from 'history';

import { baseRoute, routeMapPath } from '@/route';

import { storage } from '@/utils/storage';

import { MenuListType } from '@/types/hompage';

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
	homepageStore.setMenuList(baseRoute as MenuListType);
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
		history.push(routeMapPath.login);
	}
};
