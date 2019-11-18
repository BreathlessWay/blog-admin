import { observable, action, computed } from "mobx";

export default class UserStore {
	@observable
	session = "";

	@action.bound
	login() {
		this.session = "login";
	}

	@action.bound
	logout() {
		this.session = "";
	}

	@computed
	get isLogin() {
		return this.session !== "";
	}
}
