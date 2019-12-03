import React, { ReactNode } from 'react';

import { Icon, Upload } from 'antd';

import { RcCustomRequestOptions } from 'antd/lib/upload/interface';
import { FigureListType, FigureItemType } from '@/types/figure';

import { uploadFile } from '@/service/upload';

import { UPLOAD_IMAGE_TYPE } from '@/utils/constant';

import './style.scss';

export type IImageShowAndUploadComponentPropType = {
	imageList: FigureListType;
	onUploadImage: (params: FigureItemType) => void;
	render: (params: { item: FigureItemType; index: number }) => ReactNode;

	disabled?: boolean;
	multiple?: boolean;
};

export type IImageShowAndUploadComponentStateType = Readonly<{
	stateDisabled: boolean;
}>;

export default class ImageShowAndUploadComponent extends React.Component<
	IImageShowAndUploadComponentPropType,
	IImageShowAndUploadComponentStateType
> {
	readonly state = {
		stateDisabled: false,
	};

	get imageListLength() {
		return this.props.imageList.length;
	}

	handleCustomUpload = (options: RcCustomRequestOptions) => {
		this.setState({
			stateDisabled: true,
		});
		if (this.props.multiple) {
			console.log(options);
			return;
		}
		uploadFile(options.file).then(({ url, title, objectId }) => {
			this.props.onUploadImage({
				url,
				title,
				objectId,
				show: this.imageListLength === 0,
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
