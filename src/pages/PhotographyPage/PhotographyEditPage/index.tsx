import React, { Component, ComponentClass, lazy } from 'react';

import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Modal } from 'antd';

import { StoreType } from '@/store/store';

import { parseSearch } from '@/utils/parseSearch';

import { routeMapPath } from '@/route';

const { warning } = Modal;

const PhotoListComponent = lazy(() =>
	import(
		/* webpackChunkName: "PhotoListComponent" */ '@/components/business/PhotoListComponent'
	),
);

export type PhotographyEditPagePropType = Pick<StoreType, 'photoListStore'> &
	RouteComponentProps;

@inject('photoListStore')
@observer
class PhotographyEditPage extends Component<PhotographyEditPagePropType> {
	get albumId() {
		return parseSearch<{ id: string }>(this.props.location.search)?.id ?? '';
	}

	componentDidMount() {
		const _this = this;

		if (!this.albumId) {
			warning({
				title: '提示',
				content: '缺少相册id参数！',
				okText: '确定',
				onOk() {
					_this.props.history.replace(routeMapPath.photography.home);
				},
			});
			return;
		}
		this.props.photoListStore.resetStore();
		this.props.photoListStore.getList();
	}

	render() {
		return <PhotoListComponent albumId={this.albumId} />;
	}
}

export default (PhotographyEditPage as unknown) as ComponentClass;
