import React, { FC } from 'react';

import { inject, observer } from 'mobx-react';

import FigureEditComponent from '@/components/common/FigureEditComponent';

import { StoreType } from '@/store/store';

import { toJS } from 'mobx';
import compose from '@/utils/compose';

export type ICatFigureComponentPropType = Pick<StoreType, 'catStore'>;

const CatFigureComponent: FC<ICatFigureComponentPropType> = props => {
	const {
		figureList = [],
		removeFigure,
		addFigure,
		setShowFigure,
	} = props.catStore.catFigure;

	return (
		<FigureEditComponent
			title="猫卡通图"
			imageList={toJS(figureList)}
			onRemoveFigure={removeFigure}
			onSetShowFigure={setShowFigure}
			onAddFigure={addFigure}
		/>
	);
};

export default compose<FC>(inject('catStore'), observer)(CatFigureComponent);
