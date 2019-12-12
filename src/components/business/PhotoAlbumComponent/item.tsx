import React, { Component, ComponentClass, MouseEvent } from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Icon, Modal } from 'antd';
import ImageLoadComponent from '@/components/common/ImageLoadComponent';
import PhotoActionComponent from '@/components/common/PhotoActionComponent';

import { StoreType } from '@/store/store';
import { AlbumItemType } from '@/types/album';

import { routeMapPath } from '@/route';

import './style.scss';

const { confirm } = Modal;

export type PhotoAlbumItemPropType = {
	item: AlbumItemType;

	onEditAlbum: (item: AlbumItemType) => void;
};

@inject('photoAlbumStore')
@observer
class PhotoAlbumItem extends Component<
	PhotoAlbumItemPropType &
		RouteComponentProps &
		Pick<StoreType, 'photoAlbumStore'>
> {
	handleEditAlbum = () => {
		const {
			history,
			item: { objectId },
		} = this.props;
		history.push(`${routeMapPath.photography.edit}?id=${objectId}`);
	};

	handleDelete = (e: MouseEvent) => {
		this.handleStop(e);
		const {
			item,
			photoAlbumStore: { removeItem },
		} = this.props;
		confirm({
			title: '删除该相册会删除该相册下的所有图片',
			content: '是否确认删除？',
			okType: 'danger',
			onOk() {
				removeItem(item);
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	handleEdit = (e: MouseEvent) => {
		this.handleStop(e);
		const { item, onEditAlbum } = this.props;
		onEditAlbum(item);
	};

	handleStop = (event: MouseEvent) => {
		event.stopPropagation();
	};

	render() {
		const { title, cover = '' } = this.props.item;

		return (
			<li className="photo-album_item" onClick={this.handleEditAlbum}>
				<PhotoActionComponent
					classNameWrap="photo-album_item__img"
					classNameTitle="photo-album_item__title"
					onClick={this.handleStop}
					onEdit={this.handleEdit}
					onDelete={this.handleDelete}
					title={title}>
					<div style={{ overflow: 'hidden' }}>
						<ImageLoadComponent
							url={cover}
							title={title}
							width={200}
							height={200}
							empty="暂无封面"
						/>
					</div>
				</PhotoActionComponent>
			</li>
		);
	}
}

export default (withRouter(PhotoAlbumItem) as unknown) as ComponentClass<
	PhotoAlbumItemPropType
>;
