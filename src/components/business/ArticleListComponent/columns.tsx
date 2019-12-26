import React from 'react';

import { Link } from 'react-router-dom';

import { Icon, Tag, Modal } from 'antd';

import store from '@/store';

import { ColumnProps } from 'antd/es/table';
import { ArticleItemType } from '@/types/article';
import { TagListType } from '@/types/tag';

import { EArticleStatus } from '@/store/ArticleDetailStore/article.enum';
import { TAG_COLOR } from '@/utils/constant';

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
		dataIndex: 'createAt',
		key: 'createAt',
		render: createAt => (
			<div className="article-list_item">
				<span>{moment(createAt).format('YYYY-MM-DD HH:mm:ss')}</span>
			</div>
		),
		sorter: (a: ArticleItemType, b: ArticleItemType) => {
			return a.createAt - b.createAt;
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

const handleChangeStatus = (article: ArticleItemType) => () => {
	const status = Boolean(article.status)
		? EArticleStatus.hide
		: EArticleStatus.show;
	store.articleListStore.changeStatus([article._id], status);
};

const handleDelete = (article: ArticleItemType) => () => {
	const { articleAlias } = store.homepageStore;
	confirm({
		title: `确认删除该${articleAlias}？`,
		okType: 'danger',
		onOk() {
			store.articleListStore.deleteArticle([article._id]);
		},
		onCancel() {
			console.log('Cancel');
		},
	});
};

export default columns;
