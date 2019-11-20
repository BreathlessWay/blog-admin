import UserStore from "@/store/UserStore";
import * as H from "history";
import { MenuType } from "@/store/HomePageStore/hompage";

import { storage } from "@/utils";

export const login = ({userStore, history, firstMenu, isLoginPage = false}: { userStore: UserStore, history: H.History, firstMenu: MenuType, isLoginPage?: boolean }) => {
	const token = storage.get("token");
	// 验证token是否有效
	if (token) {
		userStore.login(token);
		if (isLoginPage) {
			history.replace(firstMenu.path);
		}
	} else {
		history.push("/login");
	}
};
