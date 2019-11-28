import React, { Component, ComponentClass, lazy } from 'react';

import { inject, observer } from 'mobx-react';

import { RouteComponentProps } from 'react-router-dom';
import { StoreType } from '@/store/store';

import { routeMapPath } from '@/route';
import { EArticleRenderType } from '@/store/ArticleDetailStore/article.enum';

const ArticleDetailTopComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleDetailTopComponent" */ '@/components/business/ArticleDetailTopComponent'
	),
);

const ArticleDetailRichTextComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleDetailRichTextComponent" */ '@/components/business/ArticleDetailContentComponent/richText'
	),
);

const ArticleDetailMarkdownComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleDetailMarkdownComponent" */ '@/components/business/ArticleDetailContentComponent/markdown'
	),
);

export type IArticleEditPagePropType = Pick<StoreType, 'articleDetailStore'> &
	RouteComponentProps;

@inject('articleDetailStore')
@observer
class ArticleEditPage extends Component<IArticleEditPagePropType> {
	componentDidMount() {
		const { search, pathname } = this.props.location;
		const { createArticle } = this.props.articleDetailStore;
		if (search && pathname === routeMapPath.article.edit) {
		}
		if (pathname === routeMapPath.article.create) {
			createArticle();
		}
	}

	render() {
		const { detail } = this.props.articleDetailStore;
		return (
			<>
				<ArticleDetailTopComponent />
				{detail?.renderType === EArticleRenderType.richText && (
					<ArticleDetailRichTextComponent />
				)}
				{detail?.renderType === EArticleRenderType.markdown && (
					<ArticleDetailMarkdownComponent />
				)}
			</>
		);
	}
}

export default (ArticleEditPage as unknown) as ComponentClass;
