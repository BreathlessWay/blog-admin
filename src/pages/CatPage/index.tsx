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

const CatPaginationComponent = lazy(() =>
	import(
		/* webpackChunkName: "CatPictureListComponent" */ '@/components/business/CatPaginationComponent'
	),
);

export type CatPagePropType = Pick<StoreType, 'catStore'>;

const CatPage: FC<CatPagePropType> = props => {
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
			<CatPaginationComponent />
		</>
	);
};

export default compose<FC>(inject('catStore'), observer)(CatPage);
