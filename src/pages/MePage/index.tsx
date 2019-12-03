import React, { lazy } from 'react';

import './style.scss';

const HobbiesFigureComponent = lazy(() =>
	import(
		/* webpackChunkName: "HobbiesFigureComponent" */ '@/components/business/HobbiesFigureComponent'
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
			<HobbiesFigureComponent />
			<PersonalInfoComponent />
			<SkillComponent />
		</>
	);
};

export default MePage;
