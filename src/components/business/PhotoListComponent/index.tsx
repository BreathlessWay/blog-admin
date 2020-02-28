import React, { ChangeEvent, Component, ComponentClass, UIEvent } from 'react';

import { inject, observer } from 'mobx-react';

import {
	Empty,
	Button,
	Row,
	Col,
	Switch,
	Input,
	Modal,
	Typography,
	Select,
	Checkbox,
	notification,
} from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageLoadComponent from '@/components/common/ImageLoadComponent';
import ImageUploadComponent from '@/components/common/ImageUploadComponent';
import ImageLazyLoadComponent from '@/components/common/ImageLazyLoadComponent';
import preview from '@/components/common/PreviewImageComponent';
import Gap from '@/components/common/Gap';
import PhotoActionComponent from '@/components/common/PhotoActionComponent';
import BatchEditDropdownComponent from '@/components/common/BatchEditDropdownComponent';

import { StoreType } from '@/store/store';
import { ImageItemType, ImageListType } from '@/types/image';
import { PhotoItemType } from '@/types/photo';

import {
	batchChangePhotoShow,
	batchDeletePhoto,
	createPhoto,
	deletePhoto,
	setAlbumCover,
	updatePhotoInfo,
} from '@/apis/photo';
import { getAlbumList } from '@/apis/album';

import { getPhotoListService } from '@/service/photographyService';

import {
	MAX_IMAGE_COUNT,
	MAX_LENGTH_LG,
	MAX_LENGTH_SM,
	OFFSET_BOTTOM_HEIGHT,
	UPLOAD_IMAGE_TYPE,
} from '@/utils/constant';

import './style.scss';

const { Text } = Typography;

const { TextArea } = Input;

const { Option } = Select;

const { confirm } = Modal;

const elementId = 'list-view';

const imageWidth = 300;

let preScroll = 0;

export type PhotoListComponentPropType = {
	albumId: string;
};

export type PhotoListComponentStorePropType = Pick<
	StoreType,
	'photoListStore'
> &
	PhotoListComponentPropType;

export type PhotoListComponentStateType = Readonly<{
	titleError: boolean;
	visible: boolean;
	confirmLoading: boolean;
	editItem: (PhotoItemType & { albumId?: string }) | null;
	albumList: Array<{
		title: string;
		_id: string;
	}>;
}>;

@inject((allStore: StoreType) => ({
	photoListStore: allStore.photoListStore,
}))
@observer
class PhotoListComponent extends Component<
	PhotoListComponentStorePropType,
	PhotoListComponentStateType
> {
	readonly state: PhotoListComponentStateType = {
		titleError: false,
		visible: false,
		confirmLoading: false,
		editItem: null,
		albumList: [],
	};

	componentDidMount(): void {
		// 延迟一下计算宽度，不然会获取到宽度为0
		setTimeout(() => {
			this.waterFall();
		}, 100);
		window.onresize = this.waterFall;
	}

	componentWillUnmount(): void {
		window.onresize = null;
		preScroll = 0;
	}

	waterFall = () => {
		const oWarp = document.getElementById(elementId);
		const { setColumn } = this.props.photoListStore;
		if (oWarp) {
			const column = Math.floor(
				oWarp.getBoundingClientRect().width / (imageWidth + 20),
			);
			setColumn(column);
		}
	};

	handleUploadImage = async (list: ImageListType) => {
		const {
			startLoading,
			stopLoading,
			changeCount,
			hasNext,
			addList,
		} = this.props.photoListStore;
		const { albumId } = this.props;
		startLoading();
		try {
			const res = await createPhoto({ albumId, list });
			if (res.data?.success) {
				changeCount(res.data?.data?.count ?? 0);
				!hasNext && addList(res.data?.data?.list ?? []);
			} else {
				notification['error']({
					message: '添加照片失败！',
					description: res.data?.msg,
				});
			}
		} catch (e) {
		} finally {
			stopLoading();
		}
	};

	handleClickImage = ({ _id, url }: { _id: string; url: string }) => {
		if (url) {
			const { list, imageUrls } = this.props.photoListStore;
			const _index = list.findIndex(item => item._id === _id);

			preview.show({ urls: imageUrls, index: _index });
		}
	};

	handleEditPhoto = async (item: ImageItemType) => {
		const { startLoading, stopLoading } = this.props.photoListStore;
		startLoading();
		try {
			const res = await getAlbumList();
			if (res.data?.success) {
				this.setState({
					visible: true,
					titleError: false,
					confirmLoading: false,
					editItem: { ...item } as PhotoItemType,
					albumList: res.data?.data?.list ?? [],
				});
			} else {
				notification['error']({
					message: '获取相册列表失败！',
					description: res.data?.msg,
				});
			}
		} catch (e) {
		} finally {
			stopLoading();
		}
	};

	handleDeletePhoto = (item: ImageItemType) => {
		const { albumId } = this.props;
		const { removeItem, startLoading, stopLoading } = this.props.photoListStore;
		confirm({
			title: '是否确认删除该图片？',
			okType: 'danger',
			onOk: async () => {
				startLoading();
				try {
					const res = await deletePhoto({ albumId, id: item._id });
					if (res.data?.success) {
						removeItem(item as PhotoItemType);
					} else {
						notification['error']({
							message: '删除照片失败！',
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

	handleSetAsAlbumCover = async (item: ImageItemType) => {
		try {
			const {
				albumId,
				photoListStore: { setCover },
			} = this.props;
			const res = await setAlbumCover({ albumId, id: item._id });
			if (res.data?.success) {
				setCover(item._id);
			} else {
				notification['error']({
					message: '设置相册封面失败！',
					description: res.data?.msg,
				});
			}
		} catch (e) {}
	};

	handleOk = async () => {
		try {
			const { editItem } = this.state,
				{
					albumId,
					photoListStore: { removeItem, setItem },
				} = this.props;
			if (editItem) {
				if (!editItem.title?.trim()) {
					this.setState({
						titleError: true,
					});
					return;
				}
				this.setState({
					confirmLoading: true,
				});
				const { _id, show, title, url, intro } = editItem;
				const res = await updatePhotoInfo({
					albumId,
					id: _id,
					data: { albumId: editItem.albumId, show, title, url, intro },
				});
				if (res.data?.success) {
					editItem.albumId === albumId
						? setItem(editItem)
						: removeItem(editItem);
				} else {
					notification['error']({
						message: '修改照片信息失败！',
						description: res.data?.msg,
					});
				}
			}
		} catch (e) {
		} finally {
			this.setState({
				confirmLoading: false,
				visible: false,
				titleError: false,
				editItem: null,
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

	handleChangeShow = () => {
		const { editItem } = this.state;
		if (editItem) {
			editItem.show = !editItem.show;
			this.setState({
				editItem: editItem,
			});
		}
	};

	handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		const { editItem } = this.state;
		if (editItem) {
			editItem.title = value;
			this.setState({
				editItem,
				titleError: !value.trim(),
			});
		}
	};

	handleChangeIntro = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.target;

		const { editItem } = this.state;
		if (editItem) {
			editItem.intro = value;
			this.setState({
				editItem,
			});
		}
	};

	handleExChangePhoto = (value: string) => {
		const { editItem } = this.state;
		if (editItem) {
			editItem.albumId = value;
			this.setState({
				editItem,
			});
		}
	};

	handleChangeChecked = (item: ImageItemType) => () => {
		this.props.photoListStore.setItem({
			...(item as PhotoItemType),
			...{ checked: !item.checked },
		});
	};

	handleBatchChangeChecked = () => {
		this.props.photoListStore.batchChangeChecked();
	};

	batchChangeShow = async (show: boolean) => {
		try {
			const {
				albumId,
				photoListStore: { checkedId, batchHide, batchShow },
			} = this.props;
			const res = await batchChangePhotoShow({ albumId, ids: checkedId, show });
			if (res.data?.success) {
				show ? batchShow() : batchHide();
			} else {
				notification['error']({
					message: '修改照片信息失败！',
					description: res.data?.msg,
				});
			}
		} catch (e) {}
	};

	handleBatchHide = () => {
		this.batchChangeShow(false);
	};

	handleBatchShow = () => {
		this.batchChangeShow(true);
	};

	handleBatchDelete = async () => {
		const {
			albumId,
			photoListStore: { checkedId, batchDelete, startLoading, stopLoading },
		} = this.props;
		try {
			startLoading();
			const res = await batchDeletePhoto({
				albumId,
				ids: JSON.stringify(checkedId),
			});
			if (res.data?.success) {
				batchDelete();
			} else {
				notification['error']({
					message: '批量删除照片失败！',
					description: res.data?.msg,
				});
			}
		} catch (e) {
		} finally {
			stopLoading();
		}
	};

	handleScroll = (e: UIEvent<HTMLUListElement>) => {
		const { hasNext, loading, nextPage } = this.props.photoListStore;
		const _scrollTop = (e.target as any).scrollTop,
			_height = (e.target as any).getBoundingClientRect().height;
		if (_scrollTop < preScroll) {
			return;
		}
		preScroll = _scrollTop;
		const height: Array<number> = [];
		document.querySelectorAll('.photo-list_column').forEach(item => {
			height.push(item.getBoundingClientRect().height);
		});
		const maxHeight = Math.max(...height);
		if (
			_scrollTop + _height + OFFSET_BOTTOM_HEIGHT >= maxHeight &&
			hasNext &&
			!loading
		) {
			nextPage();
			getPhotoListService();
		}
	};

	renderPhotoList = () => {
		const { spliceList, albumInfo, isEmpty } = this.props.photoListStore;
		const coverId = albumInfo?.cover ?? '';
		return (
			<ul className="photo-list" id={elementId} onScroll={this.handleScroll}>
				{isEmpty && <Empty description="暂无图片" />}
				{spliceList.map((photoList, index) => (
					<li key={index} className="photo-list_column">
						<ImageLazyLoadComponent
							itemClassName="photo-list_item"
							imageList={photoList}
							render={({ item, observer }) => (
								<section className="photo-list-image_wrap">
									<Checkbox
										className="photo-list-image_checkbox"
										checked={item.checked}
										onChange={this.handleChangeChecked(item)}
									/>
									<PhotoActionComponent
										classNameWrap="photo-list_image"
										classNameTitle="photo-list_image__title"
										isCover={coverId === item._id}
										onEdit={() => this.handleEditPhoto(item)}
										onDelete={() => this.handleDeletePhoto(item)}
										onChecked={() => this.handleSetAsAlbumCover(item)}
										title={item.title}>
										<ImageLoadComponent
											onClick={({ url }) =>
												this.handleClickImage({ _id: item._id, url })
											}
											observer={observer}
											url={item.url}
											title={item.title}
											width={imageWidth}
										/>
									</PhotoActionComponent>
								</section>
							)}
						/>
					</li>
				))}
			</ul>
		);
	};

	render() {
		const {
			albumId,
			photoListStore: { isEmpty, isAllListChecked, hasChecked, albumInfo },
		} = this.props;
		const {
			visible,
			confirmLoading,
			editItem,
			titleError,
			albumList,
		} = this.state;

		return (
			<BasicWrapComponent
				title={albumInfo?.title ?? ''}
				note={`一次最多上传${MAX_IMAGE_COUNT}张图片，图片需小于500k`}
				operation={
					<BatchEditDropdownComponent
						isEmpty={isEmpty}
						isAllListChecked={isAllListChecked}
						tips="是否确认删除选中的图片？"
						hasChecked={hasChecked}
						onBatchSelect={this.handleBatchChangeChecked}
						onBatchShow={this.handleBatchShow}
						onBatchHide={this.handleBatchHide}
						onBatchDelete={this.handleBatchDelete}>
						<ImageUploadComponent
							onUploadImage={this.handleUploadImage}
							multiple={true}
							disabled={false}
							accept={UPLOAD_IMAGE_TYPE}
							showUploadList={false}>
							<Button type="link">上传图片</Button>
						</ImageUploadComponent>
					</BatchEditDropdownComponent>
				}>
				{this.renderPhotoList()}
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
							<label htmlFor="show">显示图片：</label>
							<Switch
								checked={editItem?.show ?? true}
								onChange={this.handleChangeShow}
							/>
						</Col>
						<Gap size="lg" />
						<Col>
							<label htmlFor="title">图片标题：</label>
							<Gap />
							<Input
								id="title"
								value={editItem?.title ?? ''}
								placeholder="请输入图片标题"
								allowClear={true}
								maxLength={MAX_LENGTH_SM}
								onChange={this.handleChangeTitle}
							/>
							{titleError && <Text type="danger">图片标题不能为空</Text>}
						</Col>
						<Gap size="lg" />
						<Col>
							<label htmlFor="intro">图片描述：</label>
							<Gap />
							<TextArea
								id="intro"
								value={editItem?.intro ?? ''}
								placeholder="请输入图片描述"
								allowClear={true}
								maxLength={MAX_LENGTH_LG}
								rows={4}
								onChange={this.handleChangeIntro}
							/>
						</Col>
						<Gap size="lg" />
						<Col>
							<label htmlFor="intro">移动图片：</label>
							<Gap />
							<Select
								value={editItem?.albumId}
								style={{ width: '100%' }}
								onChange={this.handleExChangePhoto}>
								{albumList.map(item => (
									<Option
										key={item._id}
										value={item._id}
										disabled={item._id === albumId}>
										{item.title}
									</Option>
								))}
							</Select>
						</Col>
					</Row>
				</Modal>
			</BasicWrapComponent>
		);
	}
}

export default (PhotoListComponent as unknown) as ComponentClass<
	PhotoListComponentPropType
>;
