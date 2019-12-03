import React, { FC } from 'react';

import { inject, observer } from 'mobx-react';

import FigureEditComponent from '@/components/common/FigureEditComponent';

import { StoreType } from '@/store/store';

import { toJS } from 'mobx';
import compose from '@/utils/compose';

export type ICatFigureComponentPropType = Pick<
	StoreType,
	'catStore' | 'homepageStore'
>;

const CatFigureComponent: FC<ICatFigureComponentPropType> = props => {
	const {
		figureList = [],
		removeFigure,
		addFigure,
		setShowFigure,
	} = props.catStore.catFigure;

	const { catAlias } = props.homepageStore;

	return (
		<FigureEditComponent
			title={`${catAlias}卡通图`}
			imageList={toJS(figureList)}
			onRemoveFigure={removeFigure}
			onSetShowFigure={setShowFigure}
			onAddFigure={addFigure}
		/>
	);
};

export default compose<FC>(
	inject((allStore: StoreType) => ({
		catStore: allStore.catStore,
		homepageStore: allStore.homepageStore,
	})),
	observer,
)(CatFigureComponent);
