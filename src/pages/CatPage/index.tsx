import React, { lazy } from 'react';

const CatFigureComponent = lazy(() =>
	import(
		/* webpackChunkName: "CatFigureComponent" */ '@/components/business/CatFigureComponent'
	),
);

const CatPage = () => {
	return (
		<>
			<CatFigureComponent />
		</>
	);
};

export default CatPage;
