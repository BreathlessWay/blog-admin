import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';
// 引入编辑器组件
import BraftEditor, { EditorState } from 'braft-editor';

import { StoreType } from '@/store/store';

import { EArticleDetailKey } from '@/store/ArticleDetailStore/article.enum';
import { RICH_TEXT_AUTO_SAVE_TIME } from '@/utils/constant';

import { storage } from '@/utils/storage';

// 引入编辑器样式
import 'braft-editor/dist/index.css';
import './style.scss';

export type IArticleDetailUEditComponentPropType = Pick<
	StoreType,
	'articleDetailStore'
>;

@inject('articleDetailStore')
@observer
class ArticleDetailUEditComponent extends Component<
	IArticleDetailUEditComponentPropType
> {
	time: any = null;

	submitContent = () => {
		// 在编辑器获得焦点时按下ctrl+s会执行此方法
	};

	handleEditorChange = (editorState: EditorState) => {
		this.props.articleDetailStore.changeDetail({
			key: EArticleDetailKey.draftDetail,
			value: editorState,
		});
	};

	handleAutoSave = () => {
		const { detail } = this.props.articleDetailStore;
		if (detail) {
			this.time = setInterval(() => {
				storage.set({
					key: 'rich_text',
					value: detail.draftDetail.toRAW(),
				});
			}, RICH_TEXT_AUTO_SAVE_TIME);
		}
	};

	componentWillUnmount(): void {
		window.clearInterval(this.time);
	}

	render() {
		const { detail } = this.props.articleDetailStore;
		return (
			<BraftEditor
				onFocus={this.handleAutoSave}
				className="rich-text"
				value={detail?.draftDetail}
				onChange={this.handleEditorChange}
				onSave={this.submitContent}
			/>
		);
	}
}

export default (ArticleDetailUEditComponent as unknown) as ComponentClass;
