import React, { FC } from 'react';

import { inject, observer } from 'mobx-react';

import FigureEditComponent from '@/components/common/FigureEditComponent';

import { StoreType } from '@/store/store';

import { toJS } from 'mobx';
import compose from '@/utils/compose';

import './style.scss';

export type IPersonalFigureComponentPropType = Pick<StoreType, 'userStore'>;

const PersonalFigureComponent: FC<IPersonalFigureComponentPropType> = props => {
	const {
		figureList,
		addFigure,
		setShowFigure,
		removeFigure,
	} = props.userStore.personalFigure;
	return (
		<FigureEditComponent
			title="个人形象卡通图"
			imageList={toJS(figureList)}
			onRemoveFigure={removeFigure}
			onSetShowFigure={setShowFigure}
			onAddFigure={addFigure}
		/>
	);
};

export default compose<FC>(
	inject('userStore'),
	observer,
)(PersonalFigureComponent);