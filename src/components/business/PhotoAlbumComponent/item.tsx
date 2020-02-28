import React, { Component, ComponentClass, MouseEvent } from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { Modal, Checkbox, notification } from 'antd';
import ImageLoadComponent from '@/components/common/ImageLoadComponent';
import PhotoActionComponent from '@/components/common/PhotoActionComponent';

import { StoreType } from '@/store/store';
import { AlbumItemType } from '@/types/album';

import { routeMapPath } from '@/route';

import './style.scss';
import { deleteAlbum } from '@/apis/album';
import { getAlbumService } from '@/service/photographyService';

const { confirm } = Modal;

export type PhotoAlbumItemPropType = {
	item: AlbumItemType & {
		cover: {
			url: string;
		};
	};

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
			item: { _id },
		} = this.props;
		history.push(`${routeMapPath.photography.edit}?id=${_id}`);
	};

	handleDelete = (e: MouseEvent) => {
		this.handleStop(e);
		const {
			item,
			photoAlbumStore: { removeItem, hasNext, startLoading, stopLoading },
		} = this.props;
		confirm({
			title: '删除该相册会删除该相册下的所有图片',
			content: '是否确认删除？',
			okType: 'danger',
			onOk: async () => {
				try {
					startLoading();
					const res = await deleteAlbum({ id: item._id });
					if (res.data?.success) {
						if (hasNext) {
							await getAlbumService();
						} else {
							removeItem(item);
						}
					} else {
						notification['error']({
							message: '删除相册失败！',
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

	handleEdit = (e: MouseEvent) => {
		this.handleStop(e);
		const { item, onEditAlbum } = this.props;
		onEditAlbum(item);
	};

	handleStop = (event: MouseEvent) => {
		event.stopPropagation();
	};

	handleChangeChecked = () => {
		const { item } = this.props;
		this.props.photoAlbumStore.setItem({
			...item,
			...{ checked: !item.checked },
		});
	};

	render() {
		const { title, cover, checked } = this.props.item;

		return (
			<li className="photo-album_item" onClick={this.handleEditAlbum}>
				<Checkbox
					className="photo-album_checked"
					checked={checked}
					onChange={this.handleChangeChecked}
					onClick={this.handleStop}
				/>
				<PhotoActionComponent
					classNameWrap="photo-album_item__img"
					classNameTitle="photo-album_item__title"
					onClick={this.handleStop}
					onEdit={this.handleEdit}
					onDelete={this.handleDelete}
					title={title}>
					<div style={{ overflow: 'hidden' }}>
						<ImageLoadComponent
							url={cover?.url ?? ''}
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
