import { observable, action, computed } from "mobx";
import { storage } from "@/utils";

export default class UserStore {
	@observable
	session = "";

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
}
