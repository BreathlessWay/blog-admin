import React, { lazy, useEffect, FC } from 'react';

import { inject, observer } from 'mobx-react';

import { StoreType } from '@/store/store';

import compose from '@/utils/compose';

const CatFigureComponent = lazy(() =>
	import(
		/* webpackChunkName: "CatFigureComponent" */ '@/components/business/CatFigureComponent'
	),
);

const CatPictureListComponent = lazy(() =>
	import(
		/* webpackChunkName: "CatPictureListComponent" */ '@/components/business/CatPictureListComponent'
	),
);

export type ICatPagePropType = Pick<StoreType, 'catStore'>;

const CatPage: FC<ICatPagePropType> = props => {
	const {
		catStore: { getList },
	} = props;

	useEffect(() => {
		getList();
	}, [getList]);

	return (
		<>
			<CatFigureComponent />
			<CatPictureListComponent />
		</>
	);
};

export default compose<FC>(inject('catStore'), observer)(CatPage);
