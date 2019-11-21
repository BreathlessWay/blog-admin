import React, { ComponentClass } from "react";
import { inject, observer } from "mobx-react";

import { Upload, Icon, Card, Row } from "antd";
import CommonWrapComponent from "@/components/common/CommonWrapComponent";

import preview from "@/components/common/PreviewImageComponent";

import { RcCustomRequestOptions } from "antd/lib/upload/interface";
import UserStore from "@/store/UserStore";

import "./style.scss";

export type IPersonalImageComponentPropType = {
	userStore: UserStore
}

const iconStyle = {
	fontSize: "24px"
};


@inject("userStore")
@observer
class PersonalImageComponent extends React.Component<IPersonalImageComponentPropType> {

	handleRemove = (index: number) => () => {
		this.props.userStore.removePersonalImage(index);
	};

	handlePreview = (url: string) => () => {
		preview.show(url);
	};

	handleSetAsDefault = (index: number) => () => {
		this.props.userStore.setAsDefaultPersonalImage(index);
	};

	handleCustomUpload = (options: RcCustomRequestOptions) => {
		// 伪文件上传预览
		const fileReader = new FileReader();
		fileReader.readAsDataURL(options.file);
		fileReader.onload = (e) => {
			if (e.target && e.target.result) {
				this.props.userStore.addPersonalImage(e.target.result as string);
			}
		};
	};

	get fileList() {
		return this.props.userStore.userDetail.personalImage;
	}

	render() {
		return <CommonWrapComponent
			title="个人形象"
			needEdit={false}
		>
			<Row type="flex">
				{
					this.fileList.map((item, index) =>
						<Card
							key={item.url + index}
							className="personal-image_card"
							hoverable
							bodyStyle={{display: "none"}}
							cover={<img alt="" src={item.url}/>}
							actions={[
								<Icon type="eye" style={iconStyle} onClick={this.handlePreview(item.url)}/>,
								<Icon type="delete" style={iconStyle} onClick={this.handleRemove(index)}/>,
								<Icon
									type="check-circle"
									style={{...iconStyle, ...{color: item.default ? "#faad14" : ""}}}
									onClick={this.handleSetAsDefault(index)}
								/>
							]}
						/>
					)
				}
				<section className="personal-image_upload">
					<Upload
						customRequest={this.handleCustomUpload}
						accept={".jpg,.jpeg,.png"}
						listType="picture-card"
						showUploadList={false}
					>
						<div>
							<Icon type="plus"/>
							<div className="ant-upload-text">上传图片</div>
						</div>
					</Upload>
				</section>
			</Row>
		</CommonWrapComponent>;
	}
}

export default PersonalImageComponent as unknown as ComponentClass;

