import React, { FC } from 'react';

import { inject, observer } from 'mobx-react';

import FigureEditComponent from '@/components/common/FigureEditComponent';

import { StoreType } from '@/store/store';

import { toJS } from 'mobx';
import compose from '@/utils/compose';

export type IHobbiesFigureComponentPropType = Pick<StoreType, 'userStore'>;

const HobbiesFigureComponent: FC<IHobbiesFigureComponentPropType> = props => {
	const {
		removeFigure,
		setShowFigure,
		addFigure,
		figureList,
	} = props.userStore.hobbiesFigure;
	return (
		<FigureEditComponent
			title="爱好卡通图"
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
)(HobbiesFigureComponent);
