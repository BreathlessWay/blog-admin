import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import Editor from 'for-editor';

import { StoreType } from '@/store/store';
import { EArticleDetailKey } from '@/store/ArticleDetailStore/article.enum';
import { uploadFile } from '@/service/upload';

export type IArticleDetailMarkdownComponentPropType = Pick<
	StoreType,
	'articleDetailStore'
>;

@inject('articleDetailStore')
@observer
class ArticleDetailMarkdownComponent extends Component<
	IArticleDetailMarkdownComponentPropType
> {
	$vm = React.createRef<any>();

	handleChange = (value: string) => {
		this.props.articleDetailStore.changeDetail({
			key: EArticleDetailKey.markdown,
			value,
		});
	};

	handleUploadFile = (file: File, index: number) => {
		uploadFile(file).then(({ url, name }) => {
			this.$vm.current.$img2Url(name, url);
		});
	};

	render() {
		const { detail } = this.props.articleDetailStore;

		return (
			<Editor
				ref={this.$vm}
				value={detail?.markdown}
				onChange={this.handleChange}
				addImg={this.handleUploadFile}
				placeholder="请输入文章内容..."
				preview={true}
				subfield={true}
				toolbar={{
					h1: true, // h1
					h2: true, // h2
					h3: true, // h3
					h4: true, // h4
					img: true, // 图片
					link: true, // 链接
					code: true, // 代码块
					preview: true, // 预览
					expand: true, // 全屏
					/* v0.0.9 */
					undo: true, // 撤销
					redo: true, // 重做
					/* v0.2.3 */
					subfield: true, // 单双栏模式
				}}
			/>
		);
	}
}

export default (ArticleDetailMarkdownComponent as unknown) as ComponentClass;
