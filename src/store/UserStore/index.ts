import { observable, action, computed } from "mobx";
import { storage } from "@/utils";

import { UserDetailType } from "@/store/UserStore/user";

export default class UserStore {
	@observable
	session = "";

	@observable
	userDetail: UserDetailType | null = null;

	emptySocialTmp = {
		icon: "",
		value: ""
	};

	@action.bound
	login(token: string) {
		this.session = token;
		storage.set({key: "token", value: "login"});
	}

	@action.bound
	logout() {
		this.session = "";
		storage.remove("token");
	}

	@computed
	get isLogin() {
		return this.session !== "";
	}

	@computed
	get hasSocial() {
		return this.userDetail && this.userDetail.social && this.userDetail.social.length;
	}
}
