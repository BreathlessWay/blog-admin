import React, { ChangeEvent, Component, ComponentClass } from 'react';

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
import { PhotoItemType, PhotoListType } from '@/types/photo';

import {
	MAX_IMAGE_COUNT,
	MAX_LENGTH_LG,
	MAX_LENGTH_SM,
	UPLOAD_IMAGE_TYPE,
} from '@/utils/constant';

import './style.scss';

const { Text } = Typography;

const { TextArea } = Input;

const { Option } = Select;

const { confirm } = Modal;

const elementId = 'list-view';

const imageWidth = 300;

export type PhotoListComponentPropType = {
	albumId: string;
};

export type PhotoListComponentStorePropType = Pick<
	StoreType,
	'photoListStore' | 'photoAlbumStore'
> &
	PhotoListComponentPropType;

export type PhotoListComponentStateType = Readonly<{
	titleError: boolean;
	visible: boolean;
	confirmLoading: boolean;
	editItem: PhotoItemType | null;
}>;

@inject((allStore: StoreType) => ({
	photoListStore: allStore.photoListStore,
	photoAlbumStore: allStore.photoAlbumStore,
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
	};

	componentDidMount(): void {
		this.waterFall();
		window.onresize = this.waterFall;
	}

	componentDidUpdate(): void {
		this.waterFall();
	}

	componentWillUnmount(): void {
		window.onresize = null;
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

	handleUploadImage = (item: ImageListType) => {
		const { addList, hasNext } = this.props.photoListStore;
		if (hasNext) {
		} else {
			addList(item as PhotoListType);
		}
	};

	handleClickImage = ({ _id, url }: { _id: string; url: string }) => {
		if (url) {
			const { list, imageUrls } = this.props.photoListStore;
			const _index = list.findIndex(item => item._id === _id);

			preview.show({ urls: imageUrls, index: _index });
		}
	};

	handleEditPhoto = (item: ImageItemType) => {
		this.setState({
			visible: true,
			titleError: false,
			confirmLoading: false,
			editItem: { ...item } as PhotoItemType,
		});
	};

	handleDeletePhoto = (item: ImageItemType) => {
		const { removeItem } = this.props.photoListStore;
		confirm({
			title: '是否确认删除该图片？',
			okType: 'danger',
			onOk() {
				removeItem(item as PhotoItemType);
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	handleOk = () => {
		const { editItem } = this.state;
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
			this.props.photoListStore.setItem(editItem as PhotoItemType);
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
		console.log(value);
		const { editItem } = this.state;
		if (editItem) {
			this.props.photoListStore.removeItem(editItem);
		}
	};

	handleChangeChecked = (item: ImageItemType) => () => {
		this.props.photoListStore.setItem({
			...item,
			...{ checked: !item.checked },
		} as PhotoItemType);
	};

	handleBatchChangeChecked = () => {
		this.props.photoListStore.batchChangeChecked();
	};

	handleBatchHide = () => {
		this.props.photoListStore.batchHide();
	};

	handleBatchShow = () => {
		this.props.photoListStore.batchShow();
	};

	handleBatchDelete = () => {
		this.props.photoListStore.batchDelete();
	};

	renderPhotoList = () => {
		const { spliceList } = this.props.photoListStore;
		return (
			<ul className="photo-list" id={elementId}>
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
										onEdit={() => this.handleEditPhoto(item)}
										onDelete={() => this.handleDeletePhoto(item)}
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
		const { isEmpty, isAllListChecked, hasChecked } = this.props.photoListStore;
		const { list } = this.props.photoAlbumStore;
		const { albumId } = this.props;
		const { visible, confirmLoading, editItem, titleError } = this.state;

		return (
			<BasicWrapComponent
				title={'相册名'}
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
				{isEmpty ? <Empty description="暂无图片" /> : this.renderPhotoList()}

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
								value={albumId}
								style={{ width: '100%' }}
								onChange={this.handleExChangePhoto}>
								{list.map(item => (
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
