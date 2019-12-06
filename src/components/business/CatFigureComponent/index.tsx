import React, { FC } from 'react';

import { inject, observer } from 'mobx-react';

import FigureEditComponent from '@/components/common/FigureEditComponent';

import { StoreType } from '@/store/store';

import { toJS } from 'mobx';
import compose from '@/utils/compose';

export type CatFigureComponentPropType = Pick<
	StoreType,
	'catStore' | 'homepageStore'
>;

const CatFigureComponent: FC<CatFigureComponentPropType> = props => {
	const {
		imageList = [],
		removeImage,
		addImage,
		setShowImage,
	} = props.catStore.catFigure;

	const { catAlias } = props.homepageStore;

	return (
		<FigureEditComponent
			title={`${catAlias}卡通图`}
			imageList={toJS(imageList)}
			onRemoveFigure={removeImage}
			onSetShowFigure={setShowImage}
			onAddFigure={addImage}
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
