import React, { lazy } from 'react';

import './style.scss';

const MeLikeImageComponent = lazy(() =>
	import(
		/* webpackChunkName: "MeLikeImageComponent" */ '@/components/business/MeLikeImageComponent'
	),
);

const MePage = () => {
	return (
		<>
			<MeLikeImageComponent />
		</>
	);
};

export default MePage;
