import React, { ReactNode } from 'react';

import { Icon, Upload } from 'antd';

import { RcCustomRequestOptions } from 'antd/lib/upload/interface';
import { ImageListType, ImageItemType } from '@/types/image';

import { uploadFile } from '@/service/upload';

import { UPLOAD_IMAGE_TYPE } from '@/utils/constant';

import './style.scss';

export type ImageShowAndUploadComponentPropType = {
	imageList: ImageListType;
	onUploadImage: (params: Omit<ImageItemType, 'show'>) => void;
	render: (params: { item: ImageItemType; index: number }) => ReactNode;

	disabled?: boolean;
	multiple?: boolean;
};

export type ImageShowAndUploadComponentStateType = Readonly<{
	stateDisabled: boolean;
}>;

export default class ImageShowAndUploadComponent extends React.Component<
	ImageShowAndUploadComponentPropType,
	ImageShowAndUploadComponentStateType
> {
	readonly state = {
		stateDisabled: false,
	};

	handleCustomUpload = (options: RcCustomRequestOptions) => {
		const { multiple, onUploadImage } = this.props;
		this.setState({
			stateDisabled: true,
		});
		if (multiple) {
			console.log(options);
			return;
		}
		uploadFile(options.file).then(({ url, title, objectId }) => {
			onUploadImage({
				url,
				title,
				objectId,
			});
			this.setState({
				stateDisabled: false,
			});
		});
	};

	render() {
		const {
			imageList,
			disabled = false,
			render,
			multiple = false,
		} = this.props;
		const { stateDisabled } = this.state;
		return (
			<ul className="image-upload_list">
				{imageList.map((item, index) => (
					<li key={item.objectId} className="image-upload_item">
						{render({ item, index })}
					</li>
				))}
				<li className="image-upload_input">
					<Upload
						multiple={multiple}
						disabled={disabled || stateDisabled}
						customRequest={this.handleCustomUpload}
						accept={UPLOAD_IMAGE_TYPE}
						listType="picture-card"
						showUploadList={false}>
						<div>
							<Icon type="plus" />
							<div className="ant-upload-text">上传图片</div>
						</div>
					</Upload>
				</li>
			</ul>
		);
	}
}
