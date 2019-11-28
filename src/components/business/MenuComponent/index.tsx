import React, { ComponentClass } from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Menu, Icon } from 'antd';

import { ClickParam } from 'antd/lib/menu';
import { StoreType } from '@/store/store';

import compose from '@/utils/compose';
import { getPath } from '@/utils/path';

const { Item, SubMenu } = Menu;

export type IMenuComponentPropType = RouteComponentProps &
	Pick<StoreType, 'homepageStore'>;
export type IMenuComponentStateType = Readonly<{}>;

@inject('homepageStore')
@observer
class MenuComponent extends React.Component<
	IMenuComponentPropType,
	IMenuComponentStateType
> {
	get menuList() {
		return this.props.homepageStore.menuList || [];
	}

	handleClick = (e: ClickParam) => {
		const _keys = e.key.split('-');
		const index = 0;
		const _path = getPath(_keys, this.menuList, index);
		if (_path) {
			this.props.history.push(_path);
			if (_keys.length > 1) {
				const [openKey] = _keys;
				this.props.homepageStore.changeOpenKeys([openKey]);
			} else {
				this.props.homepageStore.changeOpenKeys([]);
			}
			this.props.homepageStore.changeSelectedKeys([e.key]);
		}
	};

	handleOpenChange = (keys: Array<string>) => {
		this.props.homepageStore.changeOpenKeys(keys);
	};

	render() {
		const { openKeys, selectedKeys } = this.props.homepageStore;
		const { menuList } = this;
		return (
			<Menu
				theme={'dark'}
				onClick={this.handleClick}
				openKeys={openKeys}
				onOpenChange={this.handleOpenChange}
				selectedKeys={selectedKeys}
				mode="inline">
				{menuList.map((item, index) => {
					if (item.children && item.children.length) {
						return (
							<SubMenu
								key={index}
								title={
									<span>
										<Icon type={item.type} />
										<span>{item.name}</span>
									</span>
								}>
								{item.children.map(
									(child, i) =>
										child.show && (
											<Item key={`${index}-${i}`}>{child.name}</Item>
										),
								)}
							</SubMenu>
						);
					} else {
						return (
							<Item key={index}>
								<Icon type={item.type} />
								{item.name}
							</Item>
						);
					}
				})}
			</Menu>
		);
	}
}

export default compose<ComponentClass>(withRouter)(MenuComponent);
