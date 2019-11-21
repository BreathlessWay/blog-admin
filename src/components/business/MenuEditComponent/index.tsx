import React, { ChangeEvent, ComponentClass } from 'react';
import { inject, observer } from 'mobx-react';

import { Checkbox, Col, Icon, Input, Row, Typography } from 'antd';

import DraggableComponent from '@/components/common/DraggableComponent';
import CommonWrapComponent from '@/components/common/CommonWrapComponent';

import { StoreType } from '@/store/store';
import { MenuType } from '@/store/HomePageStore/hompage';

import './style.scss';

const { Text } = Typography;

export type IMenuEditComponentPropType = StoreType;

export type IMenuEditComponentStateType = Readonly<{}>;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class MenuEditComponent extends React.Component<
	IMenuEditComponentPropType,
	IMenuEditComponentStateType
> {
	get menuList() {
		return this.props.homepageStore.menuList.map(item => ({
			...item,
			...{ error: !item.name.trim(), id: item.type },
		}));
	}

	get canSubmit() {
		const hasEmpty = this.menuList.some(item => item.error);
		return !hasEmpty;
	}

	editMenu = () => {
		// 发送请求
	};

	handleEdit = () => {
		if (this.canSubmit) {
			this.editMenu();
			return true;
		}
		return false;
	};

	handleMoveCard = (
		dragIndex: number,
		hoverIndex: number,
		isEditing: boolean,
	) => {
		if (isEditing) {
			this.props.homepageStore.sortMenuList(dragIndex, hoverIndex);
		}
	};

	handleChangeInput = (e: ChangeEvent<HTMLInputElement>, item: MenuType) => {
		this.props.homepageStore.changeMenu({ item, value: e.target.value });
	};

	handleChangeCheckbox = (item: MenuType) => () => {
		this.props.homepageStore.changeMenu({
			item,
			value: !item.show,
			type: 'checkbox',
		});
	};

	render() {
		return (
			<CommonWrapComponent
				title="菜单栏"
				handleEdit={this.handleEdit}
				render={isEditing => (
					<DraggableComponent
						moveCard={(dragIndex, hoverIndex) =>
							this.handleMoveCard(dragIndex, hoverIndex, isEditing)
						}
						list={this.menuList}
						render={item => (
							<Col>
								<Row type="flex" align="middle">
									<Col span={10}>
										<Input
											value={item.name}
											maxLength={6}
											onChange={e => this.handleChangeInput(e, item)}
											prefix={<Icon type={item.type} />}
											allowClear={true}
											disabled={!isEditing}
										/>
									</Col>
									<Col span={6} offset={1}>
										<Checkbox
											checked={item.show}
											onChange={this.handleChangeCheckbox(item)}
											disabled={!isEditing}>
											是否显示
										</Checkbox>
									</Col>
									<Col span={24}>
										{item.error && <Text type="danger">菜单名称不能为空</Text>}
									</Col>
								</Row>
							</Col>
						)}
					/>
				)}
			/>
		);
	}
}

export default (MenuEditComponent as unknown) as ComponentClass;
