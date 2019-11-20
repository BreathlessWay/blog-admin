import React, { ComponentClass } from "react";
import { inject, observer } from "mobx-react";

import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import MenuEditItemComponent from "./item";
import CommonWrapComponent from "../CommonWrapComponent";

import { StoreType } from "@/store/store";

import "./style.scss";

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

	render() {
		const {isEditing} = this.state;
		const {menuList} = this;
		return <CommonWrapComponent
			title="菜单栏"
			isEditing={isEditing}
			handleEdit={this.handleEdit}
		>
			<DndProvider backend={HTML5Backend}>
				{
					menuList.map((item, index) => <MenuEditItemComponent
						key={item.type}
						isEditing={isEditing}
						id={item.type}
						index={index}
						item={item}
						moveCard={this.handleMoveCard}
					/>)
				}
			</DndProvider>
		</CommonWrapComponent>;
	}
}

export default MenuEditComponent as unknown as ComponentClass;
