import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Row, Col, Pagination, Button, Modal, notification } from 'antd';

import { StoreType } from '@/store/store';

import { getCatListService } from '@/service/catListService';

import { batchChangeCatInfo, batchDeleteCatItem } from '@/apis/cat';

import './style.scss';
import { render } from 'react-dom';

const { confirm } = Modal;

export type CatPaginationComponentPropType = Pick<StoreType, 'catStore'>;

@inject('catStore')
@observer
class CatPaginationComponent extends Component<CatPaginationComponentPropType> {
	handlePaginationChange = (page: number) => {
		this.props.catStore.jumpToPage(page);
		getCatListService();
	};

	handleShowSizeChange = (current: number, size: number) => {
		this.props.catStore.changePageSize(size);
		getCatListService();
	};

	batchChange = async (show: boolean) => {
		try {
			const { checkedId } = this.props.catStore;
			const res = await batchChangeCatInfo({ ids: checkedId, show });
			if (res.data?.success) {
			} else {
				notification['error']({
					message: '批量修改图片失败！',
					description: res.data?.msg,
				});
			}
		} catch (e) {}
	};

	handleChangeChecked = () => {
		this.props.catStore.batchChangeChecked();
	};

	handleBatchHide = () => {
		this.props.catStore.batchHide();
		this.batchChange(false);
	};

	handelBatchShow = () => {
		this.props.catStore.batchShow();
		this.batchChange(true);
	};

	handleBatchDelete = () => {
		const { checkedId, startLoading, stopLoading } = this.props.catStore;
		confirm({
			title: '是否确认删除选中图片？',
			okType: 'danger',
			onOk: async () => {
				try {
					startLoading();
					const res = await batchDeleteCatItem(checkedId);
					if (res.data?.success) {
						await getCatListService();
					} else {
						notification['error']({
							message: '批量删除图片失败！',
							description: res.data?.msg,
						});
					}
				} catch (e) {
				} finally {
					stopLoading();
				}
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
			hasChecked,
		} = this.props.catStore;

		return (
			!isEmpty && (
				<Row type="flex" align="middle" justify="space-between">
					<Col>
						<Button type="link" onClick={this.handleChangeChecked}>
							{isAllListChecked ? '取消全选' : '全选'}
						</Button>
						{hasChecked && (
							<>
								<Button type="link" onClick={this.handleBatchHide}>
									批量隐藏
								</Button>
								<Button type="link" onClick={this.handelBatchShow}>
									批量显示
								</Button>
								<Button type="link" onClick={this.handleBatchDelete}>
									批量删除
								</Button>
							</>
						)}
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
