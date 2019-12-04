import React, { Component, ComponentClass } from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Button, Col, Row, Typography, Modal } from 'antd';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';

import {
	EArticleDetailKey,
	EArticleEditError,
	EArticleRenderType,
} from '@/store/ArticleDetailStore/article.enum';

import { ARTICLE_CACHE_KEY } from '@/utils/constant';
import compose from '@/utils/compose';
import { storage } from '@/utils/storage';

import { routeMapPath } from '@/route';

const { Text } = Typography;
const { error } = Modal;

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

	handleSubmitContent = () => {
		const { detail, changeDetail, validError } = this.props.articleDetailStore;
		// 校验
		if (detail) {
			const errorMsg: Array<string> = [];
			const { draftDetail, title, intro, tags, markdown, renderType } = detail;
			if (!title.trim()) {
				errorMsg.push('文章标题');
				validError({
					key: EArticleEditError.titleError,
					value: true,
				});
			}
			if (!intro.trim()) {
				errorMsg.push('文章简介');
				validError({
					key: EArticleEditError.introError,
					value: true,
				});
			}
			if (!tags.length) {
				errorMsg.push('文章标签');
				validError({
					key: EArticleEditError.tagError,
					value: true,
				});
			}

			if (
				(renderType === EArticleRenderType.markdown && !markdown.trim()) ||
				(renderType === EArticleRenderType.richText && !draftDetail.toText())
			) {
				errorMsg.push('文章内容');
				validError({
					key: EArticleEditError.contentError,
					value: true,
				});
			}

			if (errorMsg.length) {
				const errMsg = errorMsg.join('，');
				error({
					title: '提示',
					content: `${errMsg}不能为空`,
				});
				return;
			}

			// 虽然html字符串也可以用于持久化存储，但是对于比较复杂的富文本内容，在反复编辑的过程中，可能会存在格式丢失的情况
			// 比较标准的做法是在数据库中同时存储raw字符串和html字符串，分别用于再次编辑和前台展示。
			if (renderType === EArticleRenderType.richText) {
				// 将editorState数据转换成HTML字符串
				const htmlContent = draftDetail.toHTML();
				// 将editorState数据转换成RAW字符串
				const rawString = draftDetail.toRAW();
				changeDetail({
					key: EArticleDetailKey.richTextHtml,
					value: htmlContent,
				});
				changeDetail({
					key: EArticleDetailKey.richTextRaw,
					value: rawString,
				});
			}
			if (renderType === EArticleRenderType.markdown) {
				console.log(markdown);
			}
			storage.remove(ARTICLE_CACHE_KEY);
		}
	};

	render() {
		const {
			error: { contentError },
		} = this.props.articleDetailStore;
		return (
			<>
				{contentError && <Text type="danger">文章内容不能为空</Text>}
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
							onClick={this.handleSubmitContent}>
							提交
						</Button>
					</Row>
				</Col>
				<Gap size="lg" />
			</>
		);
	}
}

export default compose<ComponentClass>(withRouter)(
	ArticleDetailButtonComponent,
);
