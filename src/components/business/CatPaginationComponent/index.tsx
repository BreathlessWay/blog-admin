import React, { Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Pagination } from 'antd';

import { StoreType } from '@/store/store';

import './style.scss';

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

	render() {
		const { pageSize, pageIndex, count } = this.props.catStore;

		return (
			count > 0 && (
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
			)
		);
	}
}

export default (CatPaginationComponent as unknown) as ComponentClass;
