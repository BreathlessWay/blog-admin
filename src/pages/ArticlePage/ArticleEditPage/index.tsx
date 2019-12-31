import React, { Component, ComponentClass, lazy } from 'react';

import { inject, observer } from 'mobx-react';

import { Modal } from 'antd';

import { RouteComponentProps } from 'react-router-dom';
import { StoreType } from '@/store/store';
import { ArticleCacheType, ArticleDetailType } from '@/types/article';

import { EArticleRenderType } from '@/store/ArticleDetailStore/article.enum';

import { ARTICLE_CACHE_KEY, ARTICLE_CACHE_TIME } from '@/utils/constant';
import { parseSearch } from '@/utils/parseSearch';
import { storage } from '@/utils/storage';

import { routeMapPath } from '@/route';
import { getTagListService } from '@/service/tagService';

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

export type ArticleEditPagePropType = Pick<
	StoreType,
	'articleDetailStore' | 'tagStore' | 'homepageStore'
> &
	RouteComponentProps;

@inject((allStore: StoreType) => ({
	articleDetailStore: allStore.articleDetailStore,
	tagStore: allStore.tagStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class ArticleEditPage extends Component<ArticleEditPagePropType> {
	time: any = null;

	async componentDidMount() {
		try {
			await getTagListService();

			const _this = this;
			const { pathname } = _this.props.location;
			const { articleAlias } = _this.props.homepageStore;

			if (pathname === routeMapPath.article.edit && !_this.articleId) {
				warning({
					title: '提示',
					content: `编辑${articleAlias}缺少${articleAlias}id参数！`,
					okText: '确定',
					onOk() {
						_this.props.history.replace(routeMapPath.article.home);
					},
				});
				return;
			}
			await _this.getData();

			if (_this.judgeCache) {
				confirm({
					title: '提示',
					content: '您似乎有上一次未保存的草稿，是否载入？',
					keyboard: false,
					maskClosable: false,
					onOk() {
						_this.loadCache();
					},
					onCancel() {
						storage.remove(ARTICLE_CACHE_KEY);
					},
				});
				return;
			}

			storage.remove(ARTICLE_CACHE_KEY);
			_this.startCache();
		} catch (e) {}
	}

	componentWillUnmount(): void {
		window.clearInterval(this.time);
		this.time = null;
		this.props.articleDetailStore.resetError();
	}

	get judgeCache() {
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
					if (detail.tags.join() !== tags.join()) {
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
	}

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
				const _cacheTag = tags.filter(value => value);
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

			const params: ArticleDetailType = {
				title,
				intro,
				tags: [],
				renderType,
				status: Number(status),
			} as any;
			if (tags.length) {
				params.tags = this.props.tagStore.tags
					.filter(item => item._id && tags.includes(item._id))
					.map(tag => tag._id) as Array<string>;
			}
			if (renderType === EArticleRenderType.richText) {
				params.richTextRaw = detail;
			}
			if (renderType === EArticleRenderType.markdown) {
				params.markdown = detail;
			}

			this.props.articleDetailStore.setDetail(params);
		}
		this.startCache();
	};

	getData = () => {
		const { createArticle } = this.props.articleDetailStore;
		if (this.isEdit) {
		}
		if (this.isCreate) {
			createArticle();
		}
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
