import React, { lazy } from 'react';

import Gap from '@/components/common/Gap';

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

const ArticlePage = () => {
	return (
		<>
			<ArticleFilterComponent />
			<Gap size="lg" />
			<ArticleListComponent />
		</>
	);
};

export default ArticlePage;
