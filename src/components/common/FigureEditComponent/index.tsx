import React, { Component } from 'react';

import { Icon, message, Modal } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';
import ImageCardComponent from '@/components/common/ImageCardComponent';
import preview from '@/components/common/PreviewImageComponent';

import { ImageItemType, ImageListType } from '@/types/image';

import {
	ACTION_ICON_SIZE,
	MAX_IMAGE_COUNT,
	MAX_IMAGE_SIZE,
} from '@/utils/constant';

const { confirm } = Modal;

const iconStyle = {
	fontSize: ACTION_ICON_SIZE,
};

export type FigureEditComponentPropType = {
	title: string;
	onRemoveFigure: (item: ImageItemType) => void;
	onSetShowFigure: (item: ImageItemType) => void;
	onAddFigure: (params: ImageItemType) => void;
	imageList: ImageListType;
};

export default class FigureEditComponent extends Component<
	FigureEditComponentPropType
> {
	constructor(props: any) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}

	get urls() {
		return this.props.imageList.map(item => item.url);
	}

	get imageListLength() {
		return this.props.imageList.length;
	}

	handleRemove = (item: ImageItemType) => {
		const _this = this;

		if (item.show) {
			message.warning('当前图片正在使用中！');
		} else {
			confirm({
				title: '是否确认删除该图片？',
				okType: 'danger',
				onOk() {
					_this.props.onRemoveFigure(item);
				},
				onCancel() {
					console.log('Cancel');
				},
			});
		}
	};

	handlePreview = (index: number) => () => {
		if (this.urls[index]) {
			preview.show({ urls: this.urls, index });
		}
	};

	handleAddFigure = (item: Array<Omit<ImageItemType, 'show'>>) => {
		this.props.onAddFigure({
			...item[0],
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
									onClick={() => this.handleRemove(item)}
								/>,
								<Icon
									type="check-circle"
									style={{
										...iconStyle,
										...{ color: item.show ? '#1890ff' : '' },
									}}
									onClick={() => onSetShowFigure(item)}
								/>,
							]}
						/>
					)}
				/>
			</BasicWrapComponent>
		);
	}
}
