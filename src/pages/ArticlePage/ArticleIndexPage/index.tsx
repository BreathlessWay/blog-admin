import React, { FC, lazy, useEffect } from 'react';

import { inject, observer } from 'mobx-react';

import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';

import { getTagListService } from '@/service/tagService';
import { getArticleListService } from '@/service/articleService';

import compose from '@/utils/compose';

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

export type ArticlePagePropType = Pick<
	StoreType,
	'articleListStore' | 'tagStore'
>;

const ArticlePage: FC<ArticlePagePropType> = () => {
	const getData = async () => {
		try {
			await getTagListService();
			await getArticleListService();
		} catch (e) {}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<ArticleFilterComponent />
			<Gap size="lg" />
			<ArticleListComponent />
		</>
	);
};

export default compose<FC>(
	inject((allStore: StoreType) => ({
		articleListStore: allStore.articleListStore,
		tagStore: allStore.tagStore,
	})),
	observer,
)(ArticlePage);
