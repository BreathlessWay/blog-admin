import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import FigureEditComponent from '@/components/common/FigureEditComponent';

import { StoreType } from '@/store/store';
import { ImageItemType } from '@/types/image';

import { updateUserService } from '@/service/userService';

import { toJS } from 'mobx';

import './style.scss';

export type PersonalFigureComponentPropType = Pick<StoreType, 'userStore'>;

@inject('userStore')
@observer
class PersonalFigureComponent extends Component<
	PersonalFigureComponentPropType
> {
	handleUpdateFigure = async () => {
		try {
			const { imageList } = this.props.userStore.personalFigure;
			await updateUserService({ personalFigure: imageList });
		} catch (e) {}
	};

	handleRemoveFigure = (item: ImageItemType) => {
		this.props.userStore.personalFigure.removeImage(item);
		this.handleUpdateFigure();
	};

	handleSetShowFigure = (item: ImageItemType) => {
		this.props.userStore.personalFigure.setShowImage(item);
		this.handleUpdateFigure();
	};

	handleAddFigure = (item: ImageItemType) => {
		this.props.userStore.personalFigure.addImage(item);
		this.handleUpdateFigure();
	};

	render() {
		const { imageList } = this.props.userStore.personalFigure;
		return (
			<FigureEditComponent
				title="个人形象卡通图"
				imageList={toJS(imageList)}
				onRemoveFigure={this.handleRemoveFigure}
				onSetShowFigure={this.handleSetShowFigure}
				onAddFigure={this.handleAddFigure}
			/>
		);
	}
}

export default (PersonalFigureComponent as unknown) as ComponentClass;
