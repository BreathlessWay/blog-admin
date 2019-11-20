import { action, computed, observable } from "mobx";
import { MenuType } from "@/store/HomePageStore/hompage";

export enum EMenuType {
	home = "home",
	user = "user",
	"file-word" = "file-word",
	contacts = "contacts",
	camera = "camera"
}

export default class HomePageStore {
	@observable
	menuList: Array<MenuType> = [
		{
			name: "首页",
			type: EMenuType.home,
			path: "/home",
			show: true
		}, {
			name: "我",
			type: EMenuType.user,
			path: "/me",
			show: true
		}, {
			name: "文章",
			type: EMenuType["file-word"],
			path: "/article",
			show: true
		}, {
			name: "撸猫",
			type: EMenuType.contacts,
			path: "/cat",
			show: true
		}, {
			name: "摄影",
			type: EMenuType.camera,
			path: "/photography",
			show: true
		}
	];

	@action
	setMenuList(list: Array<MenuType>) {
		this.menuList = list;
	}

	@computed
	get breadcrumbNameMap() {
		const maps: Record<string, string> = {};
		this.menuList.forEach(item => {
			maps[item.path] = item.name;
		});
		return maps;
	}

	@computed
	get firstMenu() {
		return this.menuList[0];
	}
}
