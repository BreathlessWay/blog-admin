import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Editor } from 'react-draft-wysiwyg';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { Col } from 'antd';

import { StoreType } from '@/store/store';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.scss';
import { EArticleDetailType } from '@/store/ArticleDetailStore/article.enum';

export type IArticleDetailContentComponentPropType = Pick<
	StoreType,
	'articleDetailStore'
>;

export type IArticleDetailContentComponentStateType = Readonly<{}>;

@inject('articleDetailStore')
@observer
class ArticleDetailContentComponent extends Component<
	IArticleDetailContentComponentPropType,
	IArticleDetailContentComponentStateType
> {
	handleChange = (content: EditorState) => {
		const data = draftToHtml(convertToRaw(content.getCurrentContent()));
		this.props.articleDetailStore.changeDetail({
			key: EArticleDetailType.detail,
			value: data,
		});
	};

	render() {
		const { detail } = this.props.articleDetailStore;
		const blocksFromHtml = htmlToDraft(detail?.detail ?? '');
		const { contentBlocks, entityMap } = blocksFromHtml;
		const contentState = ContentState.createFromBlockArray(
			contentBlocks,
			entityMap,
		);
		const editorState = EditorState.createWithContent(contentState);
		return (
			<Col span={24}>
				<Editor
					editorState={editorState}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"
					onEditorStateChange={this.handleChange}
				/>
			</Col>
		);
	}
}

export default (ArticleDetailContentComponent as unknown) as ComponentClass;
