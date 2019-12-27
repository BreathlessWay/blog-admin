import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import FigureEditComponent from '@/components/common/FigureEditComponent';

import { StoreType } from '@/store/store';
import { ImageItemType } from '@/types/image';

import { updateUserDetail } from '@/apis/user';

import { toJS } from 'mobx';

import './style.scss';

export type HobbiesFigureComponentPropType = Pick<StoreType, 'userStore'>;

@inject('userStore')
@observer
class HobbiesFigureComponent extends Component<HobbiesFigureComponentPropType> {
	handleUpdateFigure = () => {
		const { imageList } = this.props.userStore.hobbiesFigure;
		updateUserDetail({ hobbiesFigure: imageList });
	};

	handleRemoveFigure = (item: ImageItemType) => {
		this.props.userStore.hobbiesFigure.removeImage(item);
		this.handleUpdateFigure();
	};

	handleSetShowFigure = (item: ImageItemType) => {
		this.props.userStore.hobbiesFigure.setShowImage(item);
		this.handleUpdateFigure();
	};

	handleAddFigure = (item: ImageItemType) => {
		this.props.userStore.hobbiesFigure.addImage(item);
		this.handleUpdateFigure();
	};

	render() {
		const { imageList } = this.props.userStore.hobbiesFigure;
		return (
			<FigureEditComponent
				title="爱好卡通图"
				imageList={toJS(imageList)}
				onRemoveFigure={this.handleRemoveFigure}
				onSetShowFigure={this.handleSetShowFigure}
				onAddFigure={this.handleAddFigure}
			/>
		);
	}
}

export default (HobbiesFigureComponent as unknown) as ComponentClass;
