import React, { Component, ComponentClass } from 'react';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Button, Col, Row } from 'antd';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';

import compose from '@/utils/compose';

import { routeMapPath } from '@/route';

export type IArticleDetailMarkdownComponentPropType = Pick<
	StoreType,
	'articleDetailStore'
> &
	RouteComponentProps;

@inject('articleDetailStore')
@observer
class ArticleDetailMarkdownComponent extends Component<
	IArticleDetailMarkdownComponentPropType
> {
	handleCancel = () => {
		this.props.history.replace(routeMapPath.article.home);
	};

	handleSubmitMarkdown = () => {};

	render() {
		const { detail } = this.props.articleDetailStore;

		return (
			<>
				<Col span={24}>{detail?.markdown}</Col>
				<Gap size="lg" />
				<Col span={24}>
					<Row type="flex" align="middle" justify="end">
						<Button size="large" onClick={this.handleCancel}>
							取消
						</Button>
						&nbsp; &nbsp; &nbsp;
						<Button
							type="primary"
							size="large"
							onClick={this.handleSubmitMarkdown}>
							提交
						</Button>
					</Row>
				</Col>
			</>
		);
	}
}

export default compose<ComponentClass>(withRouter)(
	ArticleDetailMarkdownComponent,
);
