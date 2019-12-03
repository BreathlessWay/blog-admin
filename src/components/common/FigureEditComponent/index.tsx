import React, { Component } from 'react';

import { Icon, message } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';
import ImageCardComponent from '@/components/common/ImageCardComponent';
import preview from '@/components/common/PreviewImageComponent';

import { FigureItemType } from '@/types/figure';

import { MAX_IMAGE_COUNT } from '@/utils/constant';

const iconStyle = {
	fontSize: '24px',
};

export type IFigureEditComponentPropType = {
	title: string;
	onRemoveFigure: (index: number) => void;
	onSetShowFigure: (index: number) => void;
	onAddFigure: (params: FigureItemType) => void;
	imageList: Array<FigureItemType>;
};

export default class FigureEditComponent extends Component<
	IFigureEditComponentPropType
> {
	get urls() {
		return this.props.imageList.map(item => item.url);
	}

	handleRemove = (index: number, item: FigureItemType) => () => {
		if (item.show) {
			message.warning('当前图片正在使用中！');
		} else {
			this.props.onRemoveFigure(index);
		}
	};

	handlePreview = (index: number) => () => {
		preview.show({ urls: this.urls, index });
	};

	render() {
		const { title, imageList = [], onAddFigure, onSetShowFigure } = this.props;
		return (
			<BasicWrapComponent
				title={title}
				needEdit={false}
				note={`最多上传${MAX_IMAGE_COUNT}张`}>
				<ImageShowAndUploadComponent
					disabled={imageList.length === MAX_IMAGE_COUNT}
					imageList={imageList}
					onUploadImage={onAddFigure}
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
