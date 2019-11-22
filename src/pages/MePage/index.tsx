import React, { lazy } from 'react';

import './style.scss';

const MeLikeImageComponent = lazy(() =>
	import(
		/* webpackChunkName: "MeLikeImageComponent" */ '@/components/business/MeLikeImageComponent'
	),
);

const PersonalInfoComponent = lazy(() =>
	import(
		/* webpackChunkName: "PersonalInfoComponent" */ '@/components/business/PersonalInfoComponent'
	),
);

const SkillComponent = lazy(() =>
	import(
		/* webpackChunkName: "SkillComponent" */ '@/components/business/SkillComponent'
	),
);

const MePage = () => {
	return (
		<>
			<MeLikeImageComponent />
			<PersonalInfoComponent />
			<SkillComponent />
		</>
	);
};

export default MePage;
