import React, { lazy } from 'react';

const MenuEditComponent = lazy(() =>
	import(
		/* webpackChunkName: "MenuEditComponent" */ '@/components/business/MenuEditComponent'
	),
);
const PersonalImageComponent = lazy(() =>
	import(
		/* webpackChunkName: "PersonalImageComponent" */ '@/components/business/PersonalImageComponent'
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

const HomePage = () => {
	return (
		<>
			<MenuEditComponent />
			<PersonalImageComponent />
			<MottoComponent />
			<SocialEditComponent />
		</>
	);
};

export default HomePage;
