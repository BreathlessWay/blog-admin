import React, { Component, ComponentClass } from 'react';

import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Table, Tag, Icon, Button, Pagination, Row, Col } from 'antd';
import Gap from '@/components/common/Gap';

import store from '@/store';

import { StoreType } from '@/store/store';
import { TagListType } from '@/store/TagStore/tag';
import { ArticleItemType } from '@/store/ArticleStore/article';

import { TAG_COLOR } from '@/utils/constant';

import moment from 'moment';

import './style.scss';

const columns = [
	{
		title: '标题',
		dataIndex: 'title',
		key: 'title',
		render: (title: string) => (
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
		render: (createAt: number) => (
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
				<Tag key={tag.objectId} color={TAG_COLOR[index]}>
					{tag.name}
				</Tag>
			)),
	},
	{
		title: '状态',
		align: 'center' as const,
		dataIndex: 'status',
		key: 'status',
		render: (status: boolean) => (
			<div className="article-list_item">
				<span>{status ? '显示中' : '已隐藏'}</span>
			</div>
		),
	},
	{
		title: '操作',
		align: 'center' as const,
		key: 'operation',
		render: (article: ArticleItemType) => (
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
				<Link to={`/article/edit?id=${article.objectId}`}>
					<Icon type="edit" style={{ fontSize: 20 }} />
				</Link>
			</div>
		),
	},
];

const handleChangeStatus = (article: ArticleItemType) => () => {
	store.articleStore.changeStatus([article.objectId], !article.status);
};

const handleDelete = (article: ArticleItemType) => () => {
	store.articleStore.deleteArticle([article.objectId]);
};

export type IArticleListComponentPropType = Pick<StoreType, 'articleStore'>;

export type IArticleListComponentStateType = Readonly<{
	selectedRowKeys: Array<any>;
}>;

@inject((allStore: StoreType) => ({
	articleStore: allStore.articleStore,
}))
@observer
class ArticleListComponent extends Component<
	IArticleListComponentPropType,
	IArticleListComponentStateType
> {
	readonly state = {
		selectedRowKeys: [],
	};

	handleSelectChange = (selectedRowKeys: Array<any>) => {
		this.setState({
			selectedRowKeys,
		});
	};

	handlePaginationChange = (page: number) => {
		this.props.articleStore.jumpToPage(page);
	};

	handleShowSizeChange = (current: number, size: number) => {
		this.props.articleStore.changePageSize(size);
	};

	handleDeleteSelected = () => {
		this.props.articleStore.deleteArticle(this.state.selectedRowKeys);
	};

	handleShowSelected = () => {
		this.props.articleStore.changeStatus(this.state.selectedRowKeys, true);
	};

	handleHideSelected = () => {
		this.props.articleStore.changeStatus(this.state.selectedRowKeys, false);
	};

	render() {
		const {
			list,
			loading,
			pageIndex,
			pageSize,
			count,
			isEmpty,
		} = this.props.articleStore;
		const { selectedRowKeys } = this.state;
		return (
			<>
				<Table
					loading={loading}
					bordered={true}
					rowSelection={{ selectedRowKeys, onChange: this.handleSelectChange }}
					columns={columns}
					dataSource={list}
					pagination={false}
				/>
				<Gap size="lg" />
				{!isEmpty && (
					<Row type="flex" align="middle" justify="space-between">
						<Col>
							<Button type="link" onClick={this.handleDeleteSelected}>
								删除
							</Button>
							<Button type="link" onClick={this.handleShowSelected}>
								显示
							</Button>
							<Button type="link" onClick={this.handleHideSelected}>
								隐藏
							</Button>
						</Col>
						<Col>
							<Pagination
								pageSize={pageSize}
								current={pageIndex}
								showQuickJumper={true}
								showTotal={total => <span>共{total}篇文章</span>}
								total={count}
								showSizeChanger={true}
								onChange={this.handlePaginationChange}
								onShowSizeChange={this.handleShowSizeChange}
							/>
						</Col>
					</Row>
				)}
			</>
		);
	}
}

export default (ArticleListComponent as unknown) as ComponentClass;
