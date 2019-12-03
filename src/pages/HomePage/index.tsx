import React, { lazy } from 'react';

const MenuEditComponent = lazy(() =>
	import(
		/* webpackChunkName: "MenuEditComponent" */ '@/components/business/MenuEditComponent'
	),
);
const PersonalFigureComponent = lazy(() =>
	import(
		/* webpackChunkName: "PersonalFigureComponent" */ '@/components/business/PersonalFigureComponent'
	),
);
const MottoComponent = lazy(() =>
	import(
		/* webpackChunkName: "MottoComponent" */ '@/components/business/MottoComponent'
	),
);
const SocialEditComponent = lazy(() =>
	import(
		/* webpackChunkName: "SocialEditComponent" */ '@/components/business/SocialEditComponent'
	),
);
const RewardComponent = lazy(() =>
	import(
		/* webpackChunkName: "RewardComponent" */ '@/components/business/RewardComponent'
	),
);

const HomePage = () => {
	return (
		<>
			<MenuEditComponent />
			<PersonalFigureComponent />
			<MottoComponent />
			<SocialEditComponent />
			<RewardComponent />
		</>
	);
};

export default HomePage;
