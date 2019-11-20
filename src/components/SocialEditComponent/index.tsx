import React, { ComponentClass } from "react";
import { inject, observer } from "mobx-react";

import { Row, Col, Input, Icon } from "antd";
import CommonWrapComponent from "../CommonWrapComponent";
import UploadFileComponent from "../UploadFileComponent";
import FileShowComponent from "../FileShowComponent";

import UserStore from "@/store/UserStore";

import "./style.scss";

export type ISocialEditComponentPropType = {
	userStore: UserStore
}

export type ISocialEditComponentStateType = {
	isEditing: boolean
}

@inject("userStore")
@observer
class SocialEditComponent extends React.Component<ISocialEditComponentPropType, ISocialEditComponentStateType> {
	readonly state = {
		isEditing: false
	};

	handleEdit = () => {
		const {isEditing} = this.state;

		if (!isEditing) {
			this.setState({
				isEditing: true
			});
		}
	};

	render() {
		const {isEditing} = this.state;
		const {userDetail} = this.props.userStore;

		return <CommonWrapComponent
			title="社交"
			isEditing={isEditing}
			handleEdit={this.handleEdit}
		>
			<Row type="flex" align="middle">
				<Col span={2}>
					简历
				</Col>
				<Col span={6}>
					<Input value={userDetail.resumeAlias} maxLength={4} disabled={!isEditing}/>
				</Col>
				<Col span={5} offset={1}>
					<UploadFileComponent label={"上传简历"} disabled={!isEditing}/>
				</Col>
				<Col span={6}>
					<FileShowComponent type="file" value={userDetail.resumeName}/>
				</Col>
			</Row>
		</CommonWrapComponent>;
	}
}

export default SocialEditComponent as unknown as ComponentClass;
