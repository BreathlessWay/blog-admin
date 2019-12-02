import React, { Component, ComponentClass, lazy } from 'react';

import { inject, observer } from 'mobx-react';

import { Modal } from 'antd';

import { RouteComponentProps } from 'react-router-dom';
import { StoreType } from '@/store/store';
import { ArticleCacheType } from '@/types/article';
import { TagListType } from '@/types/tag';

import { EArticleRenderType } from '@/store/ArticleDetailStore/article.enum';

import { ARTICLE_CACHE_KEY, ARTICLE_CACHE_TIME } from '@/utils/constant';
import { parseSearch } from '@/utils/parseSearch';
import { storage } from '@/utils/storage';

import { routeMapPath } from '@/route';

const ArticleDetailTopComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleDetailTopComponent" */ '@/components/business/ArticleDetailTopComponent'
	),
);

const ArticleDetailRichTextComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleDetailRichTextComponent" */ '@/components/business/ArticleDetailContentComponent/richText'
	),
);

const ArticleDetailMarkdownComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleDetailMarkdownComponent" */ '@/components/business/ArticleDetailContentComponent/markdown'
	),
);

const ArticleDetailButtonComponent = lazy(() =>
	import(
		/* webpackChunkName: "ArticleDetailButtonComponent" */ '@/components/business/ArticleDetailButtonComponent'
	),
);

const { confirm, warning } = Modal;

export type IArticleEditPagePropType = Pick<
	StoreType,
	'articleDetailStore' | 'tagStore'
> &
	RouteComponentProps;

@inject((allStore: StoreType) => ({
	articleDetailStore: allStore.articleDetailStore,
	tagStore: allStore.tagStore,
}))
@observer
class ArticleEditPage extends Component<IArticleEditPagePropType> {
	time: any = null;

	async componentDidMount() {
		const { pathname } = this.props.location;
		const _this = this;

		if (pathname === routeMapPath.article.edit && !this.articleId) {
			warning({
				title: '提示',
				content: '编辑文章缺失文章id参数！',
				okText: '确定',
				onOk() {
					_this.props.history.replace(routeMapPath.article.home);
				},
			});
			return;
		}

		if (await this.judgeCache()) {
			confirm({
				title: '提示',
				content: '您似乎有上一次未保存的草稿，是否载入？',
				keyboard: false,
				maskClosable: false,
				onOk() {
					_this.loadCache();
				},
				onCancel() {
					_this.getData();
				},
			});
			return;
		}

		this.getData();
	}

	componentWillUnmount(): void {
		window.clearInterval(this.time);
		this.time = null;
	}

	judgeCache = async () => {
		if (this.articleCache) {
			const {
				id,
				data: { title, intro, detail: cacheDetail, tags, renderType, status },
			} = this.articleCache;
			if (this.isCreate && id === 'create') {
				return Boolean(title || intro || cacheDetail || tags.length);
			}
			if (this.isEdit && id === this.articleId) {
				const { detail } = this.props.articleDetailStore;
				if (detail) {
					if (
						title !== detail.title ||
						intro !== detail.intro ||
						renderType !== detail.renderType ||
						Number(status) !== detail.status
					) {
						return true;
					}
					if (detail.tags.map(tag => tag.objectId).join() !== tags.join()) {
						return true;
					}
					if (
						renderType === EArticleRenderType.markdown &&
						cacheDetail !== detail.markdown
					) {
						return true;
					}
					if (
						renderType === EArticleRenderType.richText &&
						cacheDetail !== detail.richTextRaw
					) {
						return true;
					}
				}
			}
		}
		return false;
	};

	startCache = () => {
		this.time = setInterval(() => {
			const { detail } = this.props.articleDetailStore;
			if (detail) {
				const {
					title,
					intro,
					tags,
					status,
					renderType,
					markdown,
					draftDetail,
				} = detail;
				const _cacheTag = tags.map(tag => tag.objectId).filter(value => value);
				let _cacheDetail = '';
				if (renderType === EArticleRenderType.richText) {
					if (draftDetail && draftDetail.toText()) {
						_cacheDetail = draftDetail.toRAW();
					}
				}
				if (renderType === EArticleRenderType.markdown) {
					_cacheDetail = markdown;
				}
				const cache: ArticleCacheType = {
					id: this.articleId || 'create',
					data: {
						title,
						intro,
						tags: _cacheTag as Array<string>,
						status,
						renderType,
						detail: _cacheDetail,
					},
				};
				storage.set({ key: ARTICLE_CACHE_KEY, value: cache });
			}
		}, ARTICLE_CACHE_TIME);
	};

	loadCache = () => {
		if (this.articleCache) {
			const {
				data: { title, intro, tags, renderType, status, detail },
			} = this.articleCache;
			let richTextRaw = '',
				markdown = '',
				richTextHtml = '',
				_tags: TagListType = [];
			if (renderType === EArticleRenderType.richText) {
				richTextRaw = detail;
			}
			if (renderType === EArticleRenderType.markdown) {
				markdown = detail;
			}
			if (tags.length) {
				_tags = this.props.tagStore.tags.filter(
					item => item.objectId && tags.includes(item.objectId),
				);
			}
			this.props.articleDetailStore.setDetail({
				title,
				intro,
				tags: _tags,
				renderType,
				status: Number(status),
				richTextRaw,
				markdown,
				richTextHtml,
			});
		}
		this.startCache();
	};

	getData = () => {
		storage.remove(ARTICLE_CACHE_KEY);

		const { createArticle } = this.props.articleDetailStore;
		if (this.isEdit) {
		}
		if (this.isCreate) {
			createArticle();
		}
		this.startCache();
	};

	get articleCache(): ArticleCacheType | null {
		return storage.get(ARTICLE_CACHE_KEY);
	}

	get articleId() {
		return parseSearch<{ id: string }>(this.props.location.search)?.id ?? null;
	}

	get isCreate() {
		return this.props.location.pathname === routeMapPath.article.create;
	}

	get isEdit() {
		const { search, pathname } = this.props.location;
		return search && pathname === routeMapPath.article.edit;
	}

	render() {
		const { detail } = this.props.articleDetailStore;
		return (
			<>
				<ArticleDetailTopComponent />
				{detail?.renderType === EArticleRenderType.richText && (
					<ArticleDetailRichTextComponent />
				)}
				{detail?.renderType === EArticleRenderType.markdown && (
					<ArticleDetailMarkdownComponent />
				)}
				<ArticleDetailButtonComponent />
			</>
		);
	}
}

export default (ArticleEditPage as unknown) as ComponentClass;
