import React, { ChangeEvent, ComponentClass } from "react";
import { inject, observer } from "mobx-react";

import { Checkbox, Col, Icon, Input, Row, Typography } from "antd";

import DraggableComponent from "@/components/common/DraggableComponent";
import CommonWrapComponent from "@/components/common/CommonWrapComponent";

import { StoreType } from "@/store/store";
import { MenuType } from "@/store/HomePageStore/hompage";

import "./style.scss";

const {Text} = Typography;

export type IMenuEditComponentPropType = StoreType

export type IMenuEditComponentStateType = Readonly<{
	isEditing: boolean
}>

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	homepageStore: allStore.homepageStore
}))
@observer
class MenuEditComponent extends React.Component<IMenuEditComponentPropType, IMenuEditComponentStateType> {

	readonly state = {
		isEditing: false
	};

	get menuList() {
		return this.props.homepageStore.menuList.map(item => {
			return {...item, ...{error: !item.name.trim(), id: item.type}};
		});
	}

	get canSubmit() {
		const hasEmpty = this.menuList.some(item => item.error);
		const {isEditing} = this.state;
		return isEditing && !hasEmpty;
	}

	editMenu = () => {
		// 发送请求
		console.log(this.props.homepageStore.menuList);
	};

	handleEdit = () => {
		const {isEditing} = this.state;
		if (this.canSubmit) {
			this.setState({
				isEditing: false
			});
			this.editMenu();
		}
		if (!isEditing) {
			this.setState({
				isEditing: true
			});
		}
	};

	handleMoveCard = (dragIndex: number, hoverIndex: number) => {
		const {isEditing} = this.state;
		if (isEditing) {
			this.props.homepageStore.sortMenuList(dragIndex, hoverIndex);
		}
	};

	handleChangeInput = (e: ChangeEvent<HTMLInputElement>, item: MenuType) => {
		this.props.homepageStore.changeMenu({item, value: e.target.value});
	};

	handleChangeCheckbox = (item: MenuType) => () => {
		this.props.homepageStore.changeMenu({item, value: !item.show, type: "checkbox"});
	};

	render() {
		const {isEditing} = this.state;
		return <CommonWrapComponent
			title="菜单栏"
			isEditing={isEditing}
			handleEdit={this.handleEdit}
		>
			<DraggableComponent
				moveCard={this.handleMoveCard}
				list={this.menuList}
				render={(item) => <Col>
					<Row type="flex" align="middle">
						<Col span={10}>
							<Input
								value={item.name}
								maxLength={6}
								onChange={(e) => this.handleChangeInput(e, item)}
								prefix={<Icon type={item.type}/>}
								allowClear={true}
								disabled={!isEditing}
							/>
							{
								item.error && <Text type="danger">菜单名称不能为空</Text>
							}
						</Col>
						<Col span={6} offset={1}>
							<Checkbox
								checked={item.show}
								onChange={this.handleChangeCheckbox(item)}
								disabled={!isEditing}
							>
								是否显示
							</Checkbox>
						</Col>
					</Row>
				</Col>}/>
		</CommonWrapComponent>;
	}
}

export default MenuEditComponent as unknown as ComponentClass;
