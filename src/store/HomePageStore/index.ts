import { observable, action, computed } from "mobx";
import { MenuType } from "@/store/HomePageStore/hompage";

export default class HomePageStore {
	@observable
	menuList: Array<MenuType> = [
		{
			name: "首页",
			sort: 0,
			type: "home",
			path: "/",
			show: true
		}, {
			name: "我",
			sort: 1,
			type: "user",
			path: "/me",
			show: true
		}, {
			name: "文章",
			sort: 2,
			type: "file-word",
			path: "/article",
			show: true
		}, {
			name: "撸猫",
			sort: 3,
			type: "contacts",
			path: "/cat",
			show: true
		}, {
			name: "摄影",
			sort: 4,
			type: "camera",
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
		this.menuList.forEach((item, index) => {
			if (index) {
				maps[item.path] = item.name;
			}
		});
		return maps;
	}
}
