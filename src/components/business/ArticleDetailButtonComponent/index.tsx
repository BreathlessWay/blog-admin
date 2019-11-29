import React, { Component, ComponentClass } from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Button, Col, Row } from 'antd';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';

import { routeMapPath } from '@/route';

import compose from '@/utils/compose';
import {
	EArticleDetailKey,
	EArticleRenderType,
} from '@/store/ArticleDetailStore/article.enum';
import { storage } from '@/utils/storage';

export type IArticleDetailButtonComponentPropType = Pick<
	StoreType,
	'articleDetailStore'
> &
	RouteComponentProps;

@inject('articleDetailStore')
@observer
class ArticleDetailButtonComponent extends Component<
	IArticleDetailButtonComponentPropType
> {
	handleCancel = () => {
		this.props.history.replace(routeMapPath.article.home);
	};

	// 虽然html字符串也可以用于持久化存储，但是对于比较复杂的富文本内容，在反复编辑的过程中，可能会存在格式丢失的情况
	// 比较标准的做法是在数据库中同时存储raw字符串和html字符串，分别用于再次编辑和前台展示。
	handleSubmitRichText = () => {
		const { detail } = this.props.articleDetailStore;
		if (detail && detail.renderType === EArticleRenderType.richText) {
			// 将editorState数据转换成HTML字符串
			const htmlContent = detail?.draftDetail.toHTML();
			// 将editorState数据转换成RAW字符串
			const rawString = detail?.draftDetail.toRAW();
			this.props.articleDetailStore.changeDetail({
				key: EArticleDetailKey.richTextHtml,
				value: htmlContent,
			});
			this.props.articleDetailStore.changeDetail({
				key: EArticleDetailKey.richTextRaw,
				value: rawString,
			});
			storage.remove('rich_text');
		}
	};

	render() {
		return (
			<>
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
							onClick={this.handleSubmitRichText}>
							提交
						</Button>
					</Row>
				</Col>
			</>
		);
	}
}

export default compose<ComponentClass>(withRouter)(
	ArticleDetailButtonComponent,
);
