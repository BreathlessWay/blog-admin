import store from '@/store';
import * as H from 'history';

import { notification } from 'antd';

import { baseRoute, routeMapPath } from '@/route';

import { MenuListType } from '@/types/hompage';
import { LOGIN_TOKEN } from '@/utils/constant';

import { storage } from '@/utils/storage';
import { valid } from '@/apis/user';

export const getMenu = ({
	pathname,
	isLoginPage,
}: {
	pathname: string;
	isLoginPage?: boolean;
}) => {
	// get menu
	store.homepageStore.setMenuList(baseRoute as MenuListType);
	const _pathname = isLoginPage ? store.homepageStore.firstMenu.path : pathname;
	store.homepageStore.setKeys(_pathname);
};

export const loginService = async ({
	history,
	isLoginPage,
	token,
}: {
	history: H.History;
	isLoginPage?: boolean;
	token?: string;
}) => {
	let _token = token || storage.get(LOGIN_TOKEN);
	store.userStore.login(_token);
	if (_token && !token) {
		// 验证token是否有效
		const res = await valid();
		if (!res.data.success) {
			store.userStore.logout();
			notification['error']({
				message: '登录过期！',
				description: res.data.msg,
			});
		}
	}
	if (!store.userStore.isLogin) {
		history.push(routeMapPath.login);
	} else {
		getMenu({
			pathname: history.location.pathname,
			isLoginPage,
		});
		if (isLoginPage) {
			history.replace(store.homepageStore.firstMenu.path);
		}
	}
};
