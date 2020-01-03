import React, { lazy } from 'react';

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
		/* webpackChunkName: "CatPaginationComponent" */ '@/components/business/CatPaginationComponent'
	),
);

const CatPage = () => {
	return (
		<>
			<CatFigureComponent />
			<CatPictureListComponent />
			<CatPaginationComponent />
		</>
	);
};

export default CatPage;
