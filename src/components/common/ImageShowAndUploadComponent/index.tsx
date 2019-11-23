import React from 'react';

import { Icon, Upload } from 'antd';
import ImageCardComponent from '../ImageCardComponent';
import preview from '@/components/common/PreviewImageComponent';

import { RcCustomRequestOptions } from 'antd/lib/upload/interface';

import { uploadFile } from '@/service/upload';

import './style.scss';

const iconStyle = {
	fontSize: '24px',
};

export type IImageShowAndUploadComponentPropType = {
	imageList: Array<{
		url: string;
		show: boolean;
	}>;
	onRemove: (
		index: number,
		item: {
			url: string;
			show: boolean;
		},
	) => void;
	onSetShow: (index: number) => void;
	onUploadImage: (url: string) => void;
	disabled: boolean;
};

export type IImageShowAndUploadComponentStateType = Readonly<{
	compDisabled: boolean;
}>;

export default class ImageShowAndUploadComponent extends React.Component<
	IImageShowAndUploadComponentPropType,
	IImageShowAndUploadComponentStateType
> {
	readonly state = {
		compDisabled: false,
	};

	get urls() {
		return this.props.imageList.map(item => item.url);
	}

	handlePreview = (index: number) => () => {
		preview.show({ urls: this.urls, index });
	};

	handleCustomUpload = (options: RcCustomRequestOptions) => {
		this.setState({
			compDisabled: true,
		});
		uploadFile(options.file, ({ url }) => {
			this.props.onUploadImage(url);
			this.setState({
				compDisabled: false,
			});
		});
	};

	render() {
		const { imageList, onRemove, onSetShow, disabled } = this.props;
		const { compDisabled } = this.state;
		return (
			<ul className="image-upload_list">
				{imageList.map((item, index) => (
					<li key={item.url + index} className="image-upload_item">
						<ImageCardComponent
							url={item.url}
							actions={[
								<Icon
									type="eye"
									style={iconStyle}
									onClick={this.handlePreview(index)}
								/>,
								<Icon
									type="delete"
									style={iconStyle}
									onClick={() => onRemove(index, item)}
								/>,
								<Icon
									type="check-circle"
									style={{
										...iconStyle,
										...{ color: item.show ? '#1890ff' : '' },
									}}
									onClick={() => onSetShow(index)}
								/>,
							]}
						/>
					</li>
				))}
				<li className="image-upload_input">
					<Upload
						disabled={disabled || compDisabled}
						customRequest={this.handleCustomUpload}
						accept={'.jpg,.jpeg,.png'}
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
