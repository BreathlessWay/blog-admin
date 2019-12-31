import React from 'react';

import { Link } from 'react-router-dom';

import { Icon, Tag, Modal, notification } from 'antd';

import store from '@/store';

import { ColumnProps } from 'antd/es/table';
import { ArticleItemType } from '@/types/article';
import { TagListType } from '@/types/tag';

import { EArticleStatus } from '@/store/ArticleDetailStore/article.enum';
import { TAG_COLOR } from '@/utils/constant';

import { getArticleListService } from '@/service/articleService';

import { deleteArticle, updateArticleDetail } from '@/apis/article';

import moment from 'moment';

import { routeMapPath } from '@/route';

import './style.scss';

const { confirm } = Modal;

const columns: ColumnProps<ArticleItemType>[] = [
	{
		title: '标题',
		dataIndex: 'title',
		key: 'title',
		render: title => (
			<div className="article-list_title">
				<span>{title}</span>
			</div>
		),
	},
	{
		title: '发布日期',
		align: 'center' as const,
		dataIndex: 'createdAt',
		key: 'createdAt',
		render: createdAt => (
			<div className="article-list_item">
				<span>{moment(createdAt).format('YYYY-MM-DD HH:mm:ss')}</span>
			</div>
		),
		sorter: (a: ArticleItemType, b: ArticleItemType) => {
			return a.createdAt - b.createdAt;
		},
	},
	{
		title: '标签',
		align: 'center' as const,
		dataIndex: 'tags',
		key: 'tags',
		render: (tags: TagListType) =>
			tags.map((tag, index) => (
				<Tag key={tag._id} color={TAG_COLOR[index]}>
					{tag.name}
				</Tag>
			)),
	},
	{
		title: '状态',
		align: 'center' as const,
		dataIndex: 'status',
		key: 'status',
		render: status => (
			<div className="article-list_item">
				<span>{status ? '显示中' : '已隐藏'}</span>
			</div>
		),
	},
	{
		title: '操作',
		align: 'center' as const,
		key: 'operation',
		render: article => (
			<div className="article-list_item">
				<Icon
					type={article.status ? 'eye' : 'eye-invisible'}
					style={{ fontSize: 20 }}
					onClick={handleChangeStatus(article)}
				/>
				&nbsp; &nbsp;
				<Icon
					type="delete"
					style={{ fontSize: 20 }}
					onClick={handleDelete(article)}
				/>
				&nbsp; &nbsp;
				<Link to={`${routeMapPath.article.edit}?id=${article._id}`}>
					<Icon type="edit" style={{ fontSize: 20 }} />
				</Link>
			</div>
		),
	},
];

const handleChangeStatus = (article: ArticleItemType) => async () => {
	try {
		const status = Boolean(article.status)
			? EArticleStatus.hide
			: EArticleStatus.show;
		const res = await updateArticleDetail(article._id, { status });
		if (res.data?.success) {
			store.articleListStore.changeStatus([article._id], status);
		} else {
			notification['error']({
				message: '修改文章状态失败！',
				description: res.data?.msg,
			});
		}
	} catch (e) {}
};

const handleDelete = (article: ArticleItemType) => () => {
	const { articleAlias } = store.homepageStore;
	confirm({
		title: `确认删除该${articleAlias}？`,
		okType: 'danger',
		onOk() {
			deleteArticle(article._id)
				.then(res => {
					console.log(res);
					if (res.data?.success) {
						return getArticleListService();
					} else {
						notification['error']({
							message: '删除文章失败！',
							description: res.data?.msg,
						});
					}
				})
				.catch(e => console.error(e));
		},
		onCancel() {
			console.log('Cancel');
		},
	});
};

export default columns;
