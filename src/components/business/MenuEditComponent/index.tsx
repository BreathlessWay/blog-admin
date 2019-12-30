import React, { ChangeEvent, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Checkbox, Col, Icon, Input, Row, Typography } from 'antd';
import DraggableComponent from '@/components/common/DraggableComponent';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';

import { StoreType } from '@/store/store';
import { MenuItemType } from '@/types/hompage';

import { MAX_LENGTH_XS } from '@/utils/constant';

import { updateMenuList } from '@/apis/menu';

import './style.scss';

const { Text } = Typography;

export type MenuEditComponentPropType = Pick<
	StoreType,
	'userStore' | 'homepageStore'
>;

export type MenuEditComponentStateType = Readonly<{}>;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class MenuEditComponent extends React.Component<
	MenuEditComponentPropType,
	MenuEditComponentStateType
> {
	get menuList() {
		return this.props.homepageStore.menuList.map(item => ({
			...item,
			...{ error: !item.name.trim(), id: item._id },
		}));
	}

	get canSubmit() {
		const hasEmpty = this.menuList.some(item => item.error);
		return !hasEmpty;
	}

	editMenu = async () => {
		const { menuList } = this.props.homepageStore;
		const params = menuList.map((item, index) => ({
			name: item.name,
			show: item.show,
			type: item.type,
			onlyAdmin: item.onlyAdmin,
			sort: index,
			_id: item._id,
		}));
		return await updateMenuList({ list: params });
	};

	handleEdit = () => {
		if (this.canSubmit) {
			return this.editMenu();
		} else {
			return Promise.reject();
		}
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

	handleChangeInput = (
		e: ChangeEvent<HTMLInputElement>,
		item: MenuItemType,
	) => {
		this.props.homepageStore.changeMenu({ item, value: e.target.value });
	};

	handleChangeCheckbox = (item: MenuItemType) => () => {
		this.props.homepageStore.changeMenu({
			item,
			value: !item.show,
			type: 'checkbox',
		});
	};

	render() {
		return (
			<BasicWrapComponent
				title="菜单栏"
				note={`菜单名最长${MAX_LENGTH_XS}个字, 可以拖拽排序`}
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
											maxLength={MAX_LENGTH_XS}
											onChange={e => this.handleChangeInput(e, item)}
											prefix={<Icon type={item.type} />}
											allowClear={true}
											disabled={!isEditing}
										/>
									</Col>
									<Col span={6} offset={1}>
										{item.onlyAdmin ? (
											<Text type="warning">该项只在管理后台展示</Text>
										) : (
											<Checkbox
												checked={item.show}
												onChange={this.handleChangeCheckbox(item)}
												disabled={!isEditing}>
												是否显示
											</Checkbox>
										)}
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
