import React, { FC, lazy, useEffect } from 'react';

import { inject, observer } from 'mobx-react';

import Gap from '@/components/common/Gap';

import compose from '@/utils/compose';
import { StoreType } from '@/store/store';

const ArticleFilterComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleFilterComponent" */ '@/components/business/ArticleFilterComponent'
	),
);

const ArticleListComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleListComponent" */ '@/components/business/ArticleListComponent'
	),
);

export type ArticlePagePropType = Pick<StoreType, 'articleListStore'>;

const ArticlePage: FC<ArticlePagePropType> = props => {
	const {
		articleListStore: { getList },
	} = props;

	useEffect(() => {
		getList();
	}, [getList]);

	return (
		<>
			<ArticleFilterComponent />
			<Gap size="lg" />
			<ArticleListComponent />
		</>
	);
};

export default compose<FC>(inject('articleListStore'), observer)(ArticlePage);
