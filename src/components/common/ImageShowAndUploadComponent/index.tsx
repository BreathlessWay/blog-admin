import React, { FC } from 'react';

import { Icon } from 'antd';
import ImageUploadComponent from '@/components/common/ImageUploadComponent';
import ImageLazyLoadComponent, {
	ImageLazyLoadComponentRenderImageListPropType,
} from '@/components/common/ImageLazyLoadComponent';

import { ImageListType } from '@/types/image';

import { UPLOAD_IMAGE_TYPE } from '@/utils/constant';

import './style.scss';

export type ImageShowAndUploadComponentPropType = {
	onUploadImage: (params: ImageListType) => void;

	disabled?: boolean;
	multiple?: boolean;
} & ImageLazyLoadComponentRenderImageListPropType;

const ImageShowAndUploadComponent: FC<ImageShowAndUploadComponentPropType> = props => {
	const {
		imageList,
		disabled = false,
		render,
		multiple = false,
		onUploadImage,
	} = props;
	return (
		<ImageLazyLoadComponent
			imageList={imageList}
			render={render}
			listClassName="image-upload_list"
			itemClassName="image-upload_item"
			childClassName="image-upload_input">
			<ImageUploadComponent
				onUploadImage={onUploadImage}
				multiple={multiple}
				disabled={disabled}
				accept={UPLOAD_IMAGE_TYPE}
				listType="picture-card"
				showUploadList={false}>
				<div>
					<Icon type="plus" />
					<div className="ant-upload-text">上传图片</div>
				</div>
			</ImageUploadComponent>
		</ImageLazyLoadComponent>
	);
};

export default ImageShowAndUploadComponent;
