import React, { Component, ComponentClass } from 'react';

import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Table, Button, Pagination, Row, Col, notification, Modal } from 'antd';
import Gap from '@/components/common/Gap';

import columns from './columns';

import { StoreType } from '@/store/store';

import { EArticleStatus } from '@/store/ArticleDetailStore/article.enum';

import { getArticleListService } from '@/service/articleService';

import { batchDeleteArticle, batchUpdateArticle } from '@/apis/article';

import { routeMapPath } from '@/route';

import './style.scss';

const { confirm } = Modal;

export type ArticleListComponentPropType = Pick<
	StoreType,
	'articleListStore' | 'homepageStore'
>;

export type ArticleListComponentStateType = Readonly<{
	selectedRowKeys: Array<string>;
}>;

@inject((allStore: StoreType) => ({
	articleListStore: allStore.articleListStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class ArticleListComponent extends Component<
	ArticleListComponentPropType,
	ArticleListComponentStateType
> {
	readonly state: ArticleListComponentStateType = {
		selectedRowKeys: [],
	};

	handleSelectChange = (selectedRowKeys: Array<any>) => {
		this.setState({
			selectedRowKeys,
		});
	};

	handlePaginationChange = (page: number) => {
		this.props.articleListStore.jumpToPage(page);
		getArticleListService();
	};

	handleShowSizeChange = (current: number, size: number) => {
		this.props.articleListStore.changePageSize(size);
		getArticleListService();
	};

	handleDeleteSelected = async () => {
		const _this = this;
		const { articleAlias } = _this.props.homepageStore;
		confirm({
			title: `确认删除选中${articleAlias}？`,
			okType: 'danger',
			onOk() {
				const ids = _this.state.selectedRowKeys;
				batchDeleteArticle({ ids })
					.then(res => {
						if (res.data?.success) {
							_this.setState({
								selectedRowKeys: [],
							});
							getArticleListService();
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

	batchChangeStatus = async (status: EArticleStatus) => {
		try {
			const ids = this.state.selectedRowKeys;
			const res = await batchUpdateArticle({ ids, status });
			if (res.data?.success) {
				this.props.articleListStore.changeStatus(
					this.state.selectedRowKeys,
					status,
				);
				this.setState({
					selectedRowKeys: [],
				});
			} else {
				notification['error']({
					message: '修改文章状态失败！',
					description: res.data?.msg,
				});
			}
		} catch (e) {}
	};

	handleShowSelected = () => {
		this.batchChangeStatus(EArticleStatus.show);
	};

	handleHideSelected = () => {
		this.batchChangeStatus(EArticleStatus.hide);
	};

	render() {
		const {
			list,
			loading,
			pageIndex,
			pageSize,
			count,
			isEmpty,
		} = this.props.articleListStore;
		const { articleAlias } = this.props.homepageStore;
		const { selectedRowKeys } = this.state;

		return (
			<>
				<Table
					rowKey="_id"
					loading={loading}
					bordered={true}
					rowSelection={{ selectedRowKeys, onChange: this.handleSelectChange }}
					columns={columns}
					dataSource={list}
					pagination={false}
				/>
				<Gap size="lg" />
				<Row type="flex" align="middle" justify="space-between">
					<Col>
						{!isEmpty && selectedRowKeys && selectedRowKeys.length > 0 && (
							<>
								<Button type="link" onClick={this.handleDeleteSelected}>
									删除
								</Button>
								<Button type="link" onClick={this.handleShowSelected}>
									显示
								</Button>
								<Button type="link" onClick={this.handleHideSelected}>
									隐藏
								</Button>
							</>
						)}
						<Button type="link">
							<Link to={routeMapPath.article.create}>新建{articleAlias}</Link>
						</Button>
					</Col>
					{!isEmpty && (
						<Col>
							<Pagination
								pageSize={pageSize}
								current={pageIndex}
								showQuickJumper={true}
								showTotal={total => (
									<span>
										共{total}篇{articleAlias}
									</span>
								)}
								total={count}
								showSizeChanger={true}
								onChange={this.handlePaginationChange}
								onShowSizeChange={this.handleShowSizeChange}
							/>
						</Col>
					)}
				</Row>
			</>
		);
	}
}

export default (ArticleListComponent as unknown) as ComponentClass;
