import React from 'react';

import { Card, Icon, Row, Upload } from 'antd';

import preview from '@/components/common/PreviewImageComponent';

import { RcCustomRequestOptions } from 'antd/lib/upload/interface';

import './style.scss';

const iconStyle = {
	fontSize: '18px',
};

export type IImageShowAndUploadComponentPropType = {
	imageList: Array<{
		url: string;
		show: boolean;
	}>;
	onRemove: (index: number) => void;
	onSetShow: (index: number) => void;
	onUploadImage: (url: string) => void;
	disabled: boolean;
};

export default class ImageShowAndUploadComponent extends React.Component<
	IImageShowAndUploadComponentPropType
> {
	handlePreview = (url: string) => () => {
		preview.show(url);
	};

	handleCustomUpload = (options: RcCustomRequestOptions) => {
		// 伪文件上传预览
		const fileReader = new FileReader();
		fileReader.readAsDataURL(options.file);
		fileReader.onload = e => {
			if (e.target && e.target.result) {
				this.props.onUploadImage(e.target.result as string);
			}
		};
	};
	// TODO 不用Card，用固定大小的框，图片设置为背景图
	render() {
		const { imageList, onRemove, onSetShow, disabled } = this.props;
		return (
			<Row type="flex">
				{imageList.map((item, index) => (
					<Card
						key={item.url + index}
						className="personal-image_card"
						hoverable
						bodyStyle={{ display: 'none' }}
						cover={<img alt="" src={item.url} />}
						actions={[
							<Icon
								type="eye"
								style={iconStyle}
								onClick={this.handlePreview(item.url)}
							/>,
							<Icon
								type="delete"
								style={iconStyle}
								onClick={() => onRemove(index)}
							/>,
							<Icon
								type="check-circle"
								style={{
									...iconStyle,
									...{ color: item.show ? '#faad14' : '' },
								}}
								onClick={() => onSetShow(index)}
							/>,
						]}
					/>
				))}
				{!disabled && (
					<section className="personal-image_upload">
						<Upload
							customRequest={this.handleCustomUpload}
							accept={'.jpg,.jpeg,.png'}
							listType="picture-card"
							showUploadList={false}>
							<div>
								<Icon type="plus" />
								<div className="ant-upload-text">上传图片</div>
							</div>
						</Upload>
					</section>
				)}
			</Row>
		);
	}
}
