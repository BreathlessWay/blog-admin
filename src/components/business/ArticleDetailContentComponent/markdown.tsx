import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col } from 'antd';

import { StoreType } from '@/store/store';

export type IArticleDetailMarkdownComponentPropType = Pick<
	StoreType,
	'articleDetailStore'
>;

@inject('articleDetailStore')
@observer
class ArticleDetailMarkdownComponent extends Component<
	IArticleDetailMarkdownComponentPropType
> {
	render() {
		const { detail } = this.props.articleDetailStore;

		return <Col span={24}>{detail?.markdown}</Col>;
	}
}

export default (ArticleDetailMarkdownComponent as unknown) as ComponentClass;
