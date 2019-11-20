import React from "react";
import { inject, observer } from "mobx-react";

import { Input, Checkbox, Row, Col, Icon, Typography, Divider, Button } from "antd";

import { StoreType } from "@/store/store";
import { MenuType } from "@/store/HomePageStore/hompage";

import "./style.scss";

const {Title, Text} = Typography;

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
			return {...item, ...{error: !item.name.trim()}};
		});
	}

	get canSubmit() {
		const hasEmpty = this.menuList.some(item => item.error);
		const {isEditing} = this.state;
		return isEditing && !hasEmpty;
	}

	editMenu = () => {
		// 发送请求
	};

	handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>, item: MenuType) => {
		this.props.homepageStore.changeMenu({item, value: e.target.value});
	};

	handleChangeCheckbox = (item: MenuType) => () => {
		this.props.homepageStore.changeMenu({item, value: !item.show, type: "checkbox"});
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

	render() {
		const {isEditing} = this.state;
		const {menuList} = this;
		return <Row>
			<Col className="menu-edit_list">
				<Row align="middle" justify="space-between" type="flex">
					<Title level={4} style={{margin: 0}}>编辑菜单栏</Title>
					<Button type="link" onClick={this.handleEdit}>{isEditing ? "完成" : "编辑"}</Button>
				</Row>
				<Divider style={{margin: "10px 0"}}/>
			</Col>
			{
				menuList.map(item => <Col key={item.type} className="menu-edit_list">
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
				</Col>)
			}
		</Row>;
	}
}

export default MenuEditComponent as any;
