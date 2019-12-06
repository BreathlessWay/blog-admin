import React, { FC } from 'react';

import { inject, observer } from 'mobx-react';

import FigureEditComponent from '@/components/common/FigureEditComponent';

import { StoreType } from '@/store/store';

import { toJS } from 'mobx';
import compose from '@/utils/compose';

import './style.scss';

export type PersonalFigureComponentPropType = Pick<StoreType, 'userStore'>;

const PersonalFigureComponent: FC<PersonalFigureComponentPropType> = props => {
	const {
		imageList,
		addImage,
		setShowImage,
		removeImage,
	} = props.userStore.personalFigure;
	return (
		<FigureEditComponent
			title="个人形象卡通图"
			imageList={toJS(imageList)}
			onRemoveFigure={removeImage}
			onSetShowFigure={setShowImage}
			onAddFigure={addImage}
		/>
	);
};

export default compose<FC>(
	inject('userStore'),
	observer,
)(PersonalFigureComponent);
