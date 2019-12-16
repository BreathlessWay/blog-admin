import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Row, Col, Pagination, Button, Modal } from 'antd';

import { StoreType } from '@/store/store';

import './style.scss';

const { confirm } = Modal;

export type CatPaginationComponentPropType = Pick<StoreType, 'catStore'>;

@inject('catStore')
@observer
class CatPaginationComponent extends Component<CatPaginationComponentPropType> {
	handlePaginationChange = (page: number) => {
		this.props.catStore.jumpToPage(page);
	};

	handleShowSizeChange = (current: number, size: number) => {
		this.props.catStore.changePageSize(size);
	};

	handleChangeChecked = () => {
		this.props.catStore.batchChangeChecked();
	};

	handleBatchHide = () => {
		this.props.catStore.batchHide();
	};

	handelBatchShow = () => {
		this.props.catStore.batchShow();
	};

	handleBatchDelete = () => {
		const _this = this;
		confirm({
			title: '是否确认删除选中图片？',
			okType: 'danger',
			onOk() {
				_this.props.catStore.batchDelete();
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	render() {
		const {
			pageSize,
			pageIndex,
			isEmpty,
			count,
			isAllListChecked,
		} = this.props.catStore;

		return (
			!isEmpty && (
				<Row type="flex" align="middle" justify="space-between">
					<Col>
						<Button type="link" onClick={this.handleChangeChecked}>
							{isAllListChecked ? '取消全选' : '全选'}
						</Button>
						<Button type="link" onClick={this.handleBatchHide}>
							批量隐藏
						</Button>
						<Button type="link" onClick={this.handelBatchShow}>
							批量显示
						</Button>
						<Button type="link" onClick={this.handleBatchDelete}>
							批量删除
						</Button>
					</Col>
					<Col>
						<section className="cat-pagination">
							<Pagination
								pageSize={pageSize}
								current={pageIndex}
								showQuickJumper={true}
								showTotal={total => <span>共{total}张图片</span>}
								total={count}
								showSizeChanger={true}
								onChange={this.handlePaginationChange}
								onShowSizeChange={this.handleShowSizeChange}
							/>
						</section>
					</Col>
				</Row>
			)
		);
	}
}

export default (CatPaginationComponent as unknown) as ComponentClass;
