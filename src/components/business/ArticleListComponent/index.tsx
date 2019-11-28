import React, { Component, ComponentClass } from 'react';

import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Table, Button, Pagination, Row, Col } from 'antd';
import Gap from '@/components/common/Gap';

import columns from './columns';

import { StoreType } from '@/store/store';

import './style.scss';

export type IArticleListComponentPropType = Pick<StoreType, 'articleStore'>;

export type IArticleListComponentStateType = Readonly<{
	selectedRowKeys: Array<string>;
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
				<Row type="flex" align="middle" justify="space-between">
					<Col>
						{!isEmpty && (
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
							<Link to="/article/create">新建文章</Link>
						</Button>
					</Col>
					{!isEmpty && (
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
					)}
				</Row>
			</>
		);
	}
}

export default (ArticleListComponent as unknown) as ComponentClass;
