import React, { Component } from 'react';

import { Icon, message } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';
import ImageCardComponent from '@/components/common/ImageCardComponent';
import preview from '@/components/common/PreviewImageComponent';

import { ImageItemType } from '@/types/image';

import { MAX_IMAGE_COUNT, MAX_IMAGE_SIZE } from '@/utils/constant';

const iconStyle = {
	fontSize: '24px',
};

export type IFigureEditComponentPropType = {
	title: string;
	onRemoveFigure: (index: number) => void;
	onSetShowFigure: (index: number) => void;
	onAddFigure: (params: ImageItemType) => void;
	imageList: Array<ImageItemType>;
};

export default class FigureEditComponent extends Component<
	IFigureEditComponentPropType
> {
	get urls() {
		return this.props.imageList.map(item => item.url);
	}

	get imageListLength() {
		return this.props.imageList.length;
	}

	handleRemove = (index: number, item: ImageItemType) => () => {
		if (item.show) {
			message.warning('当前图片正在使用中！');
		} else {
			this.props.onRemoveFigure(index);
		}
	};

	handlePreview = (index: number) => () => {
		preview.show({ urls: this.urls, index });
	};

	handleAddFigure = (item: Omit<ImageItemType, 'show'>) => {
		this.props.onAddFigure({
			...item,
			...{ show: this.imageListLength === 0 },
		});
	};

	render() {
		const { title, imageList = [], onSetShowFigure } = this.props;
		return (
			<BasicWrapComponent
				title={title}
				needEdit={false}
				note={`最多上传${MAX_IMAGE_COUNT}张，图片需小于${MAX_IMAGE_SIZE}k`}>
				<ImageShowAndUploadComponent
					disabled={imageList.length === MAX_IMAGE_COUNT}
					imageList={imageList}
					onUploadImage={this.handleAddFigure}
					render={({ item, index }) => (
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
									onClick={this.handleRemove(index, item)}
								/>,
								<Icon
									type="check-circle"
									style={{
										...iconStyle,
										...{ color: item.show ? '#1890ff' : '' },
									}}
									onClick={() => onSetShowFigure(index)}
								/>,
							]}
						/>
					)}
				/>
			</BasicWrapComponent>
		);
	}
}
