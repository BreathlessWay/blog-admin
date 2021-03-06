import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';
import { message } from 'antd';
// 引入编辑器组件
import BraftEditor, { EditorState } from 'braft-editor';

import { StoreType } from '@/store/store';

import {
	EArticleDetailKey,
	EArticleEditError,
	EArticleRenderType,
} from '@/store/ArticleDetailStore/article.enum';

import { ARTICLE_IMAGE_SIZE } from '@/utils/constant';

import { uploadService } from '@/service/uploadService';

// 引入编辑器样式
import './style.scss';

import './braft-extend';

export type ArticleDetailUEditComponentPropType = Pick<
	StoreType,
	'articleDetailStore' | 'homepageStore'
>;

// 通过param.file获取到要上传的文件，
// 然后使用XMLHttpRequest或者你常用的网络请求库将文件上传到服务器，
// 将服务器返回的文件url通过param.success函数回传给编辑器即可；
// 如果能监控到文件上传进度，也可以通过param.progress函数将上传进度告知编辑器，编辑器会友好的以进度条的形式展示出来；
// 如果上传出现问题，则需要通过param.error函数告知编辑器。
export type UploadFileType = {
	file: File;
	progress: (progress: number) => void;
	libraryId: string;
	success: (res: {
		url: string;
		meta: {
			id: string;
			title: string;
			alt: string;
			loop: boolean; // 指定音视频是否循环播放
			autoPlay: boolean; // 指定音视频是否自动播放
			controls: boolean; // 指定音视频是否显示控制栏
			poster: string; // 指定视频播放器的封面
		};
	}) => void;
	error: (err: { msg: string }) => void;
};

@inject((allStore: StoreType) => ({
	articleDetailStore: allStore.articleDetailStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class ArticleDetailUEditComponent extends Component<
	ArticleDetailUEditComponentPropType
> {
	submitContent = () => {
		// 在编辑器获得焦点时按下ctrl+s会执行此方法
	};

	handleEditorChange = (editorState: EditorState) => {
		const { validError, changeDetail, detail } = this.props.articleDetailStore;
		validError({
			key: EArticleEditError.contentError,
			value:
				!editorState.toText() &&
				detail?.renderType === EArticleRenderType.richText,
		});
		changeDetail({
			key: EArticleDetailKey.draftDetail,
			value: editorState,
		});
	};
	// 如果未指定uploadFn，添加到媒体库的图片将会自动转换为base64的形式，而视频和音频则无法被添加到媒体库。
	handleUploadFile = (params: UploadFileType) => {
		if (!/^(image)/g.test(params.file.type)) {
			message.error('目前只支持上传图片');
			return;
		}
		uploadService({ file: params.file, size: ARTICLE_IMAGE_SIZE })
			.then(({ url, title }) => {
				// 假设服务端直接返回文件上传后的地址
				// 上传成功后调用param.success并传入上传后的文件地址
				params.success({
					url: url,
					meta: {
						id: url,
						title: title,
						alt: title,
						loop: true, // 指定音视频是否循环播放
						autoPlay: true, // 指定音视频是否自动播放
						controls: true, // 指定音视频是否显示控制栏
						poster: '', // 指定视频播放器的封面
					},
				});
			})
			.catch(error => {
				// 上传发生错误时调用param.error
				params.error({
					msg: error,
				});
			});

		// const progressFn = (event: any) => {
		// 	// 上传进度发生变化时调用param.progress
		// 	params.progress((event.loaded / event.total) * 100);
		// };
		//
		// xhr.upload.addEventListener('progress', progressFn, false);
	};

	render() {
		const { detail } = this.props.articleDetailStore;
		const { articleAlias } = this.props.homepageStore;

		return (
			<BraftEditor
				className="rich-text"
				placeholder={`请输入${articleAlias}内容...`}
				value={detail?.draftDetail}
				onChange={this.handleEditorChange}
				onSave={this.submitContent}
				media={{
					uploadFn: this.handleUploadFile,
				}}
			/>
		);
	}
}

export default (ArticleDetailUEditComponent as unknown) as ComponentClass;
