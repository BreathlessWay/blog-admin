import React, { Component, ComponentClass, createRef } from 'react';

import { inject, observer } from 'mobx-react';

// 引入编辑器组件
import BraftEditor from 'braft-editor';
import { Button, Col, Row } from 'antd';
import Gap from '@/components/common/Gap';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { StoreType } from '@/store/store';

import compose from '@/utils/compose';

import { routeMapPath } from '@/route';

// 引入编辑器样式
import 'braft-editor/dist/index.css';
import './style.scss';

export type IArticleDetailUEditComponentPropType = Pick<
	StoreType,
	'articleDetailStore'
> &
	RouteComponentProps;

@inject('articleDetailStore')
@observer
class ArticleDetailUEditComponent extends Component<
	IArticleDetailUEditComponentPropType,
	any
> {
	state = {
		// 创建一个空的editorState作为初始值
		editorState: BraftEditor.createEditorState(null),
	};

	componentDidMount() {
		// 假设此处从服务端获取html格式的编辑器内容
		const htmlContent = '<p>Hello <b>World!</b></p>';
		BraftEditor.createEditorState(htmlContent);
		// // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
		// this.setState({
		// 	editorState: BraftEditor.createEditorState('',{}),
		// });
	}

	submitContent = async () => {
		// 在编辑器获得焦点时按下ctrl+s会执行此方法
		// 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
		const htmlContent = this.state.editorState.toHTML();
	};

	handleEditorChange = (editorState: any) => {
		this.setState({ editorState });
	};

	handleCancel = () => {
		this.props.history.replace(routeMapPath.article.home);
	};

	handleSubmitRichText = () => {};

	render() {
		const { editorState } = this.state;
		return (
			<>
				<Col>
					<BraftEditor
						value={editorState}
						onChange={this.handleEditorChange}
						onSave={this.submitContent}
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

export default compose<ComponentClass>(withRouter)(ArticleDetailUEditComponent);
