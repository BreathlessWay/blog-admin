import React, { ComponentClass } from "react";
import { inject, observer } from "mobx-react";

import { Row, Col, Input, Icon } from "antd";
import CommonWrapComponent from "../../common/CommonWrapComponent";
import UploadFileComponent from "../../common/UploadFileComponent";
import FileShowComponent from "../../common/FileShowComponent";

import UserStore from "@/store/UserStore";

import "./style.scss";

export type ISocialEditComponentPropType = {
	userStore: UserStore
}

export type ISocialEditComponentStateType = {}

@inject("userStore")
@observer
class SocialEditComponent extends React.Component<ISocialEditComponentPropType, ISocialEditComponentStateType> {

	handleEdit = () => {
		return true;
	};

	render() {
		const {userDetail, hasSocial} = this.props.userStore;

		return <CommonWrapComponent
			title="社交"
			handleEdit={this.handleEdit}
		>
			{
				isEditing => <Row type="flex" align="middle">
					<Col span={2}>
						简历
					</Col>
					<Col span={6}>
						<Input value={userDetail ? userDetail.resumeAlias : ""} maxLength={4} disabled={!isEditing}/>
					</Col>
					<Col span={5} offset={1}>
						<UploadFileComponent label={"上传简历"} disabled={!isEditing}/>
					</Col>
					<Col span={10}>
						<FileShowComponent type="file" value={userDetail ? userDetail.resumeName : ""}/>
					</Col>
				</Row>
			}

		</CommonWrapComponent>;
	}
}

export default SocialEditComponent as unknown as ComponentClass;
