import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import {
	Button,
	Modal,
	Input,
	Switch,
	Row,
	Col,
	Empty,
	Typography,
	Pagination,
	notification,
} from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import Gap from '@/components/common/Gap';
import PhotoAlbumItem from '@/components/business/PhotoAlbumComponent/item';
import BatchEditDropdownComponent from '@/components/common/BatchEditDropdownComponent';

import { StoreType } from '@/store/store';
import { AlbumItemType } from '@/types/album';

import { getAlbumService } from '@/service/photographyService';

import {
	batchDeleteAlbum,
	batchUpdateAlbum,
	createAlbum,
	updateAlbum,
} from '@/apis/album';

import { MAX_LENGTH_SM } from '@/utils/constant';

import './style.scss';

const { Text } = Typography;

export type PhotoAlbumComponentPropType = Pick<StoreType, 'photoAlbumStore'>;

export type PhotoAlbumComponentStateType = Readonly<{
	titleError: boolean;
	visible: boolean;
	confirmLoading: boolean;
	editItem: Partial<AlbumItemType>;
}>;

@inject('photoAlbumStore')
@observer
class PhotoAlbumComponent extends Component<
	PhotoAlbumComponentPropType,
	PhotoAlbumComponentStateType
> {
	readonly state: PhotoAlbumComponentStateType = {
		titleError: false,
		visible: false,
		confirmLoading: false,
		editItem: {
			title: '',
			show: true,
		},
	};

	handleAddAlbum = () => {
		this.setState({
			visible: true,
			editItem: {
				title: '',
				show: true,
			},
		});
	};

	handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		const { editItem } = this.state;
		editItem.title = value;
		this.setState({
			editItem,
			titleError: !value.trim(),
		});
	};

	handleChangeShow = () => {
		const { editItem } = this.state;
		editItem.show = !editItem.show;
		this.setState({
			editItem,
		});
	};

	handleOk = async () => {
		try {
			const { editItem } = this.state;
			const { setItem, isFullPage } = this.props.photoAlbumStore;

			if (!editItem.title?.trim()) {
				this.setState({
					titleError: true,
				});
				return;
			}
			this.setState({
				confirmLoading: true,
			});
			if (editItem._id) {
				// edit
				const updateResult = await updateAlbum({
					id: editItem._id,
					data: { title: editItem.title, show: editItem.show as boolean },
				});
				if (updateResult.data?.success) {
					setItem(editItem as AlbumItemType);
				} else {
					notification['error']({
						message: '更新相册失败！',
						description: updateResult.data?.msg,
					});
				}
			} else {
				// create
				const createResult = await createAlbum({
					title: editItem.title,
					show: editItem.show as boolean,
				});
				if (createResult.data?.success) {
					!isFullPage && (await getAlbumService());
				} else {
					notification['error']({
						message: '新建相册失败！',
						description: createResult.data?.msg,
					});
				}
			}
		} catch (e) {
		} finally {
			this.setState({
				confirmLoading: false,
				visible: false,
			});
		}
	};

	handleCancel = () => {
		if (!this.state.confirmLoading) {
			this.setState({
				visible: false,
			});
		}
	};

	handlePaginationChange = (page: number) => {
		this.props.photoAlbumStore.jumpToPage(page);
		getAlbumService();
	};

	handleShowSizeChange = (current: number, size: number) => {
		this.props.photoAlbumStore.changePageSize(size);
		getAlbumService();
	};

	handleEditAlbum = (item: AlbumItemType) => {
		this.setState({
			visible: true,
			editItem: { ...item },
		});
	};

	handleChangeChecked = () => {
		this.props.photoAlbumStore.batchChangeChecked();
	};

	changeAlbumShow = async (show: boolean) => {
		try {
			const { checkedId, batchHide, batchShow } = this.props.photoAlbumStore;
			show ? batchShow() : batchHide();
			const res = await batchUpdateAlbum({ ids: checkedId, show });
			if (!res.data?.success) {
				notification['error']({
					message: '批量修改相册失败！',
					description: res.data?.msg,
				});
			}
		} catch (e) {}
	};

	handleBatchHide = () => {
		this.changeAlbumShow(false);
	};

	handleBatchShow = () => {
		this.changeAlbumShow(true);
	};

	handleBatchDelete = async () => {
		const { checkedId, startLoading, stopLoading } = this.props.photoAlbumStore;
		startLoading();
		try {
			const res = await batchDeleteAlbum(JSON.stringify(checkedId));
			if (res.data?.success) {
				getAlbumService();
			} else {
				notification['error']({
					message: '批量删除相册失败！',
					description: res.data?.msg,
				});
			}
		} catch (e) {
		} finally {
			stopLoading();
		}
		this.props.photoAlbumStore.batchDelete();
	};

	render() {
		const {
			visible,
			confirmLoading,
			editItem: { title, show },
			titleError,
		} = this.state;

		const {
			list,
			isEmpty,
			pageIndex,
			pageSize,
			count,
			isAllListChecked,
			hasChecked,
		} = this.props.photoAlbumStore;

		return (
			<BasicWrapComponent
				needEdit={false}
				title="相册管理"
				note={`相册标题最长${MAX_LENGTH_SM}个字`}
				operation={
					<BatchEditDropdownComponent
						tips="是否确认删除所选相册以及相册下的图片？"
						isEmpty={isEmpty}
						isAllListChecked={isAllListChecked}
						hasChecked={hasChecked}
						onBatchSelect={this.handleChangeChecked}
						onBatchHide={this.handleBatchHide}
						onBatchShow={this.handleBatchShow}
						onBatchDelete={this.handleBatchDelete}>
						<Button type="link" onClick={this.handleAddAlbum}>
							新建相册
						</Button>
					</BatchEditDropdownComponent>
				}>
				{isEmpty ? (
					<Empty description="暂无相册" />
				) : (
					<ul>
						{list.map(item => (
							<PhotoAlbumItem
								key={item._id}
								item={item as any}
								onEditAlbum={this.handleEditAlbum}
							/>
						))}
					</ul>
				)}
				<section className="photo-album_pagination">
					{!isEmpty && (
						<Pagination
							pageSize={pageSize}
							current={pageIndex}
							showQuickJumper={true}
							showTotal={total => <span>共{total}个相册</span>}
							total={count}
							showSizeChanger={true}
							onChange={this.handlePaginationChange}
							onShowSizeChange={this.handleShowSizeChange}
						/>
					)}
				</section>
				<Modal
					maskClosable={false}
					confirmLoading={confirmLoading}
					keyboard={false}
					title="编辑相册"
					visible={visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}>
					<Row>
						<Col>
							<label htmlFor="show">显示相册：</label>
							<Switch checked={show} onChange={this.handleChangeShow} />
						</Col>
						<Gap size="lg" />
						<Col>
							<label htmlFor="title">相册标题：</label>
							<Input
								className="photo-album_modal__input"
								id="title"
								value={title}
								placeholder="请输入相册标题"
								allowClear={true}
								maxLength={MAX_LENGTH_SM}
								onChange={this.handleChangeTitle}
							/>
							{titleError && (
								<div className="photo-album_modal__tip">
									<Text type="danger">相册标题不能为空</Text>
								</div>
							)}
						</Col>
					</Row>
				</Modal>
			</BasicWrapComponent>
		);
	}
}

export default (PhotoAlbumComponent as unknown) as ComponentClass;
