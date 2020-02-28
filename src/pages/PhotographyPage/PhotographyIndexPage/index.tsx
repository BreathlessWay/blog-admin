import React, { FC, lazy, useEffect } from 'react';

import { inject, observer } from 'mobx-react';

import { Spin } from 'antd';

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

	return (
		<Spin spinning={props.photoAlbumStore.loading}>
			<PhotoAlbumComponent />
		</Spin>
	);
};

export default compose<FC>(
	inject('photoAlbumStore'),
	observer,
)(PhotographyIndexPage);
