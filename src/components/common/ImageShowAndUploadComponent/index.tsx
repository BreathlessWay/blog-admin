import React, { ReactNode } from 'react';

import { Icon } from 'antd';
import ImageUploadAndPickComponent from '@/components/common/ImageUploadAndPickComponent';

import { ImageListType, ImageItemType } from '@/types/image';

import { UPLOAD_IMAGE_TYPE } from '@/utils/constant';

import './style.scss';

export type ImageShowAndUploadComponentPropType = {
	imageList: ImageListType;
	onUploadImage: (params: ImageListType) => void;
	render: (params: { item: ImageItemType; index: number }) => ReactNode;

	disabled?: boolean;
	multiple?: boolean;
};

export default class ImageShowAndUploadComponent extends React.Component<
	ImageShowAndUploadComponentPropType
> {
	render() {
		const {
			imageList,
			disabled = false,
			render,
			multiple = false,
		} = this.props;
		return (
			<ul className="image-upload_list">
				{imageList.map((item, index) => (
					<li key={item.objectId} className="image-upload_item">
						{render({ item, index })}
					</li>
				))}
				<li className="image-upload_input">
					<ImageUploadAndPickComponent
						onUploadImage={this.props.onUploadImage}
						multiple={multiple}
						disabled={disabled}
						accept={UPLOAD_IMAGE_TYPE}
						listType="picture-card"
						showUploadList={false}>
						<div>
							<Icon type="plus" />
							<div className="ant-upload-text">上传图片</div>
						</div>
					</ImageUploadAndPickComponent>
				</li>
			</ul>
		);
	}
}
