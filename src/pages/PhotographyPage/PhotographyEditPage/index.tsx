import React, { Component, ComponentClass, lazy } from 'react';

import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Modal, notification, Spin } from 'antd';

import { StoreType } from '@/store/store';

import { getAlbumInfo } from '@/apis/album';

import { getPhotoListService } from '@/service/photographyService';

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

		if (!_this.albumId) {
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
		_this.props.photoListStore.resetStore();
		_this.getData();
	}

	getData = async () => {
		const {
			startLoading,
			stopLoading,
			setAlbumInfo,
		} = this.props.photoListStore;
		startLoading();
		try {
			const albumResult = await getAlbumInfo(this.albumId);

			if (albumResult.data?.success) {
				setAlbumInfo(albumResult.data?.data ?? null);
				await getPhotoListService();
			} else {
				notification['error']({
					message: '获取相册信息失败！',
					description: albumResult.data?.msg,
				});
			}
		} catch (e) {
		} finally {
			stopLoading();
		}
	};

	render() {
		const { loading } = this.props.photoListStore;
		return (
			<Spin spinning={loading}>
				<PhotoListComponent albumId={this.albumId} />
			</Spin>
		);
	}
}

export default (PhotographyEditPage as unknown) as ComponentClass;
