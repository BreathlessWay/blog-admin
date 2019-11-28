import React, { Component, ComponentClass } from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { Col, Button, Row } from 'antd';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';

import { EArticleDetailType } from '@/store/ArticleDetailStore/article.enum';

import compose from '@/utils/compose';

import { routeMapPath } from '@/route';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.scss';

export type IArticleDetailRichTextComponentPropType = Pick<
	StoreType,
	'articleDetailStore'
> &
	RouteComponentProps;

@inject('articleDetailStore')
@observer
class ArticleDetailRichTextComponent extends Component<
	IArticleDetailRichTextComponentPropType
> {
	handleChange = (content: EditorState) => {
		this.props.articleDetailStore.changeDetail({
			key: EArticleDetailType.draftDetail,
			value: content,
		});
	};

	handleCancel = () => {
		this.props.history.replace(routeMapPath.article.home);
	};

	handleSubmitRichText = () => {
		const { detail } = this.props.articleDetailStore;
		if (detail && detail.draftDetail) {
			const data = draftToHtml(
				convertToRaw(detail.draftDetail.getCurrentContent()),
			);
			this.props.articleDetailStore.changeDetail({
				key: EArticleDetailType.detail,
				value: data,
			});
			console.log(data);
		}
	};

	render() {
		const { detail } = this.props.articleDetailStore;

		return (
			<>
				<Col>
					<Editor
						editorState={detail?.draftDetail}
						toolbarClassName="toolbarClassName"
						wrapperClassName="wrapperClassName"
						editorClassName="editorClassName"
						onEditorStateChange={this.handleChange}
						localization={{
							locale: 'zh',
						}}
					/>
				</Col>
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
	ArticleDetailRichTextComponent,
);
