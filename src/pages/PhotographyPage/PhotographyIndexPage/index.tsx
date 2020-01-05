import React, { FC, lazy, useEffect } from 'react';

import { inject, observer } from 'mobx-react';

import { StoreType } from '@/store/store';

import { getAlbumService } from '@/service/photographyService';

import compose from '@/utils/compose';

const PhotoAlbumComponent = lazy(() =>
	import(
		/* webpackChunkName: "PhotoAlbumComponent" */ '@/components/business/PhotoAlbumComponent'
	),
);

const PhotographyIndexPage: FC<Pick<StoreType, 'photoAlbumStore'>> = props => {
	useEffect(() => {
		getAlbumService();
	}, []);

	return <PhotoAlbumComponent />;
};

export default compose<FC>(
	inject('photoAlbumStore'),
	observer,
)(PhotographyIndexPage);
