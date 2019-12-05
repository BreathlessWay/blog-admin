import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col, Icon, Input, Modal, Row } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageCardComponent from '@/components/common/ImageCardComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';
import Gap from '@/components/common/Gap';
import preview from '@/components/common/PreviewImageComponent';

import { StoreType } from '@/store/store';
import { ImageItemType } from '@/types/image';

import {
	ACTION_ICON_SIZE,
	MAX_IMAGE_COUNT,
	MAX_LENGTH_LG,
	MAX_LENGTH_SM,
} from '@/utils/constant';

const { TextArea } = Input;

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

	editTitle: string;
	editIntro: string;
	editObjectId: string;
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
		editTitle: '',
		editIntro: '',
		editObjectId: '',
	};

	get urls() {
		return this.props.catStore.list.map(item => item.url);
	}

	onAddCatPicture = () => {
		// const {pageSize, listLength} = this.props.catStore
	};

	handlePreview = (index: number) => () => {
		preview.show({ urls: this.urls, index });
	};

	handleRemove = (index: number, item: ImageItemType) => () => {};

	handleSetShowFigure = (index: number) => () => {};

	handleEdit = (item: ImageItemType) => () => {
		const { title = '', intro = '', objectId } = item;
		this.setState({
			visible: true,
			editTitle: title,
			editIntro: intro,
			editObjectId: objectId,
		});
	};

	handleOk = () => {
		this.setState({
			confirmLoading: true,
		});
		setTimeout(() => {
			this.setState({
				confirmLoading: false,
				visible: false,
			});
		}, 5000);
	};

	handleCancel = () => {
		this.setState({
			visible: false,
			editTitle: '',
			editIntro: '',
			editObjectId: '',
		});
	};

	handleEditIntro = (e: ChangeEvent<HTMLTextAreaElement>) => {
		this.setState({
			editIntro: e.target.value,
		});
	};

	handleEditTitle = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({
			editTitle: e.target.value,
		});
	};

	render() {
		const { visible, confirmLoading, editIntro, editTitle } = this.state;

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
										onClick={this.handleRemove(index, item)}
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
										onClick={this.handleSetShowFigure(index)}
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
							<label htmlFor="title">图片标题</label>
							<Gap />
							<Input
								placeholder="请输入图片标题"
								id="title"
								value={editTitle}
								allowClear={true}
								maxLength={MAX_LENGTH_SM}
								onChange={this.handleEditTitle}
							/>
						</Col>
						<Gap />
						<Col>
							<label htmlFor="intro">图片简介</label>
							<Gap />
							<TextArea
								placeholder="请输入图片简介"
								id="intro"
								value={editIntro}
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
