import React, { FC } from 'react';

import { inject, observer } from 'mobx-react';

import FigureEditComponent from '@/components/common/FigureEditComponent';

import { StoreType } from '@/store/store';

import { toJS } from 'mobx';
import compose from '@/utils/compose';

export type HobbiesFigureComponentPropType = Pick<StoreType, 'userStore'>;

const HobbiesFigureComponent: FC<HobbiesFigureComponentPropType> = props => {
	const {
		removeImage,
		setShowImage,
		addImage,
		imageList,
	} = props.userStore.hobbiesFigure;
	return (
		<FigureEditComponent
			title="爱好卡通图"
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
)(HobbiesFigureComponent);
