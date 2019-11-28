import React, { Component, ComponentClass, lazy } from 'react';

import { inject, observer } from 'mobx-react';

import { RouteComponentProps } from 'react-router-dom';
import { StoreType } from '@/store/store';

import { routeMapPath } from '@/route';

const ArticleDetailTopComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleDetailTopComponent" */ '@/components/business/ArticleDetailTopComponent'
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
		return (
			<>
				<ArticleDetailTopComponent />
			</>
		);
	}
}

export default (ArticleEditPage as unknown) as ComponentClass;
