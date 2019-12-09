import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col, Icon, Input, Modal, Row, Switch } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageCardComponent from '@/components/common/ImageCardComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';
import Gap from '@/components/common/Gap';
import preview from '@/components/common/PreviewImageComponent';

import { StoreType } from '@/store/store';
import { ImageItemType, ImageListType } from '@/types/image';
import { CatItemType, CatListType } from '@/types/cat';

import {
	ACTION_ICON_SIZE,
	MAX_IMAGE_COUNT,
	MAX_LENGTH_LG,
	MAX_LENGTH_SM,
} from '@/utils/constant';

const { TextArea } = Input;
const { confirm } = Modal;

const iconStyle = {
	fontSize: ACTION_ICON_SIZE,
};

export type CatPictureListComponentPropType = Pick<
	StoreType,
	'catStore' | 'homepageStore'
>;

export type CatPictureListComponentStateType = Readonly<{
	visible: boolean;
	confirmLoading: boolean;

	editItem: CatItemType | null;
}>;

@inject((allStore: StoreType) => ({
	catStore: allStore.catStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class CatPictureListComponent extends Component<
	CatPictureListComponentPropType,
	CatPictureListComponentStateType
> {
	readonly state: CatPictureListComponentStateType = {
		visible: false,
		confirmLoading: false,
		editItem: null,
	};

	get urls() {
		return this.props.catStore.list.map(item => item.url);
	}

	onAddCatPicture = (imageList: ImageListType) => {
		const len = imageList.length;
		const { pageSize, listLength, addList } = this.props.catStore;
		if (listLength + len <= pageSize) {
			imageList.forEach(image => (image.show = true));
			addList(imageList as CatListType);
		}
	};

	handlePreview = (index: number) => () => {
		preview.show({ urls: this.urls, index });
	};

	handleRemove = (item: ImageItemType) => () => {
		const _this = this;
		confirm({
			title: '是否确认删除该图片？',
			okType: 'danger',
			onOk() {
				_this.props.catStore.removeItem(item as CatItemType);
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	handleSetShowFigure = (item: ImageItemType) => () => {
		item.show = !item.show;
		this.props.catStore.setItem(item as CatItemType);
	};

	handleEdit = (item: ImageItemType) => () => {
		this.setState({
			visible: true,
			editItem: { ...item } as CatItemType,
		});
	};

	handleOk = () => {
		this.setState({
			confirmLoading: true,
		});
		const { editItem } = this.state;
		setTimeout(() => {
			editItem && this.props.catStore.setItem(editItem);
			this.setState({
				confirmLoading: false,
				visible: false,
			});
		}, 300);
	};

	handleCancel = () => {
		if (!this.state.confirmLoading) {
			this.setState({
				visible: false,
			});
		}
	};

	handleEditIntro = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { editItem } = this.state;
		if (editItem) {
			editItem.intro = e.target.value;
			this.setState({
				editItem,
			});
		}
	};

	handleEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
		const { editItem } = this.state;
		if (editItem) {
			editItem.title = e.target.value;
			this.setState({
				editItem,
			});
		}
	};

	handleChangeSwitch = () => {
		const { editItem } = this.state;
		if (editItem) {
			editItem.show = !editItem.show;
			this.setState({
				editItem,
			});
		}
	};

	render() {
		const { visible, confirmLoading, editItem } = this.state;

		const { list } = this.props.catStore;

		const { catAlias } = this.props.homepageStore;

		return (
			<>
				<BasicWrapComponent
					needEdit={false}
					title={`${catAlias}图片`}
					note={`一次最多上传${MAX_IMAGE_COUNT}张图片，图片需小于500k`}>
					<ImageShowAndUploadComponent
						multiple={true}
						imageList={list}
						onUploadImage={this.onAddCatPicture}
						render={({ item, index }) => (
							<ImageCardComponent
								width={300}
								height={200}
								showInfo={true}
								title={item.title}
								intro={item.intro}
								url={item.url}
								actions={[
									<Icon
										type="eye"
										style={iconStyle}
										onClick={this.handlePreview(index)}
									/>,
									<Icon
										type="delete"
										style={iconStyle}
										onClick={this.handleRemove(item)}
									/>,
									<Icon
										type="edit"
										style={iconStyle}
										onClick={this.handleEdit(item)}
									/>,
									<Icon
										type="check-circle"
										style={{
											...iconStyle,
											...{ color: item.show ? '#1890ff' : '' },
										}}
										onClick={this.handleSetShowFigure(item)}
									/>,
								]}
							/>
						)}
					/>
				</BasicWrapComponent>
				<Modal
					maskClosable={false}
					keyboard={false}
					title="编辑图片信息"
					visible={visible}
					confirmLoading={confirmLoading}
					onOk={this.handleOk}
					onCancel={this.handleCancel}>
					<Row>
						<Col>
							<label htmlFor="title">显示图片：</label>
							&nbsp; &nbsp;
							<Switch
								checked={editItem?.show}
								onChange={this.handleChangeSwitch}
							/>
						</Col>
						<Gap />
						<Col>
							<label htmlFor="title">图片标题：</label>
							<Gap />
							<Input
								placeholder="请输入图片标题"
								id="title"
								value={editItem?.title}
								allowClear={true}
								maxLength={MAX_LENGTH_SM}
								onChange={this.handleEditTitle}
							/>
						</Col>
						<Gap />
						<Col>
							<label htmlFor="intro">图片简介：</label>
							<Gap />
							<TextArea
								placeholder="请输入图片简介"
								id="intro"
								value={editItem?.intro}
								allowClear={true}
								maxLength={MAX_LENGTH_LG}
								onChange={this.handleEditIntro}
								rows={4}
							/>
						</Col>
					</Row>
				</Modal>
			</>
		);
	}
}

export default (CatPictureListComponent as unknown) as ComponentClass;
