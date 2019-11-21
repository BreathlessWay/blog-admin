import React, { ComponentClass } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

import { Menu, Icon } from "antd";

import { ClickParam } from "antd/lib/menu";
import { StoreType } from "@/store/store";

export type IMenuComponentPropType = RouteComponentProps & StoreType

@inject("homepageStore")
@observer
class MenuComponent extends React.Component<IMenuComponentPropType> {
	handleClick = (e: ClickParam) => {
		const matchMenu = this.menuList.find(item => item.type === e.key);
		if (matchMenu) {
			this.props.history.push(matchMenu.path);
		}
	};

	get menuList() {
		return this.props.homepageStore.menuList || [];
	}

	get selectedKeys() {
		const matchMenu = this.menuList.find(item => {
			const {pathname} = this.props.location;
			return pathname.startsWith(item.path);
		});
		if (matchMenu) {
			return [matchMenu.type];
		}
		return [];
	}

	render() {
		const {menuList, selectedKeys} = this;
		return (
			<Menu
				theme={"dark"}
				onClick={this.handleClick}
				selectedKeys={selectedKeys}
				mode="inline"
			>
				{
					menuList.map(item => <Menu.Item key={item.type}>
						<Icon type={item.type}/>
						{item.name}
					</Menu.Item>)
				}
			</Menu>
		);
	}
}

export default withRouter(MenuComponent) as unknown as ComponentClass;
