import React, { lazy } from 'react';

const ArticleDetailTopComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleDetailTopComponent" */ '@/components/business/ArticleDetailTopComponent'
	),
);

const ArticleEditPage = () => {
	return (
		<>
			<ArticleDetailTopComponent />
		</>
	);
};

export default ArticleEditPage;
