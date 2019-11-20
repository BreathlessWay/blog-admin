import { observable, action, computed } from "mobx";
import { storage } from "@/utils";

export default class UserStore {
	@observable
	session = "";

	@observable
	userDetail = {
		resumeAlias: "下载简历",
		resumeUrl: "",
		resumeName:"",
		social: [
			{
				icon: "",
				value: ""
			}
		],
		personalShow: "",
		title: "",
		motto: "",
		intro: ""
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
}
