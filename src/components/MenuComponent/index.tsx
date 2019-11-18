import React from "react";
import { inject, observer } from "mobx-react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { Menu, Icon } from "antd";

import { ClickParam } from "antd/lib/menu";
import { StoreType } from "@/store/store";

export type IMenuComponentPropType = RouteComponentProps & StoreType

@inject("homepageStore")
@observer
class MenuComponent extends React.Component<IMenuComponentPropType> {
	handleClick = (e: ClickParam) => {
		const {menuList} = this,
			key = Number(e.key),
			{path} = menuList[key];
		this.props.history.push(path);
	};

	get menuList() {
		return this.props.homepageStore.menuList || [];
	}

	render() {
		const {menuList} = this;
		return (
			<Menu
				theme={"dark"}
				onClick={this.handleClick}
				defaultSelectedKeys={["0"]}
				mode="inline"
			>
				{
					menuList.map(item => item.show && <Menu.Item key={item.sort}>
              <Icon type={item.type}/>
						{item.name}
          </Menu.Item>)
				}
			</Menu>
		);
	}
}

export default withRouter(MenuComponent) as any;
