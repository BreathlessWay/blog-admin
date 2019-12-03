import React, { Component } from 'react';

import { message } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';

import { FigureItemType } from '@/types/figure';

import { MAX_IMAGE_COUNT } from '@/utils/constant';

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
	handleRemove = (index: number, item: FigureItemType) => {
		if (item.show) {
			message.warning('当前图片正在使用中！');
		} else {
			this.props.onRemoveFigure(index);
		}
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
					onRemove={this.handleRemove}
					imageList={imageList}
					onSetShow={onSetShowFigure}
					onUploadImage={onAddFigure}
				/>
			</BasicWrapComponent>
		);
	}
}
