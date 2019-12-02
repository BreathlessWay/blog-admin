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

const { confirm } = Modal;

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

	componentDidMount() {
		const { search } = this.props.location;

		const articleCache: ArticleCacheType | null = storage.get(
			ARTICLE_CACHE_KEY,
		);
		const cacheId = parseSearch(search) || 'create';
		const _this = this;
		if (articleCache && articleCache.id === cacheId) {
			const { title, intro, detail, tags } = articleCache.data;
			const hasCache = Boolean(
				title || intro || detail || (tags && tags.length),
			);
			if (hasCache) {
				confirm({
					title: '提示',
					content: '您似乎有上一次未保存的记录，是否载入',
					onOk() {
						_this.loadCache(articleCache);
					},
					onCancel() {
						_this.getData();
					},
				});
				return;
			}
		}

		this.getData();
	}

	componentWillUnmount(): void {
		window.clearInterval(this.time);
		this.time = null;
	}

	startCache = () => {
		this.time = setInterval(() => {
			const { detail } = this.props.articleDetailStore;
			if (detail) {
				const {
					objectId,
					title,
					tags,
					intro,
					renderType,
					status,
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
				const cache = {
					id: objectId || 'create',
					data: {
						title,
						intro,
						tags: _cacheTag,
						status: status,
						renderType: renderType,
						detail: _cacheDetail,
					},
				};
				storage.set({ key: ARTICLE_CACHE_KEY, value: cache });
			}
		}, ARTICLE_CACHE_TIME);
	};

	loadCache = (cache: ArticleCacheType) => {
		const {
			data: { title, intro, tags, renderType, status, detail },
		} = cache;
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
		if (tags && tags.length) {
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
		this.startCache();
	};

	getData = () => {
		storage.remove(ARTICLE_CACHE_KEY);

		const { search, pathname } = this.props.location;

		const { createArticle } = this.props.articleDetailStore;
		if (search && pathname === routeMapPath.article.edit) {
		}
		if (pathname === routeMapPath.article.create) {
			createArticle();
		}
		this.startCache();
	};

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
