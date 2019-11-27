import React from 'react';

import ArticleFilterComponent from '@/components/business/ArticleFilterComponent';
import ArticleListComponent from '@/components/business/ArticleListComponent';
import Gap from '@/components/common/Gap';

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
