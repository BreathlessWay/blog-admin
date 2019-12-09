import React, { lazy } from 'react';

const PhotoAlbumComponent = lazy(() =>
	import(
		/* webpackChunkName: "PhotoAlbumComponent" */ '@/components/business/PhotoAlbumComponent'
	),
);

const PhotographyIndexPage = () => {
	return (
		<>
			<PhotoAlbumComponent />
		</>
	);
};

export default PhotographyIndexPage;
