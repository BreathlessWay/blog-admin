import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import {
	Col,
	Icon,
	Input,
	Modal,
	Row,
	Switch,
	Checkbox,
	Spin,
	notification,
} from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import ImageCardComponent from '@/components/common/ImageCardComponent';
import ImageShowAndUploadComponent from '@/components/common/ImageShowAndUploadComponent';
import Gap from '@/components/common/Gap';
import preview from '@/components/common/PreviewImageComponent';

import { StoreType } from '@/store/store';
import { ImageItemType, ImageListType } from '@/types/image';
import { CatItemType } from '@/types/cat';

import { getCatListService } from '@/service/catListService';

import { changeCatInfo, createCatList, deleteCatItem } from '@/apis/cat';

import {
	ACTION_ICON_SIZE,
	MAX_IMAGE_COUNT,
	MAX_LENGTH_LG,
	MAX_LENGTH_SM,
} from '@/utils/constant';

import './style.scss';

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

	componentDidMount(): void {
		getCatListService();
	}

	onAddCatPicture = async (imageList: ImageListType) => {
		const {
			pageSize,
			listLength,
			startLoading,
			stopLoading,
			changeCount,
			count,
		} = this.props.catStore;

		try {
			startLoading();
			imageList.forEach(image => (image.show = true));
			const res = await createCatList(imageList);
			if (res.data?.success) {
				const len = imageList.length;
				if (listLength + len <= pageSize) {
					await getCatListService();
				} else {
					changeCount(count + len);
				}
			} else {
				notification['error']({
					message: '新增图片失败！',
					description: res.data?.msg,
				});
			}
		} catch (e) {
		} finally {
			stopLoading();
		}
	};

	handlePreview = (index: number) => () => {
		if (this.urls[index]) {
			preview.show({ urls: this.urls, index });
		}
	};

	handleRemove = (item: ImageItemType) => () => {
		confirm({
			title: '是否确认删除该图片？',
			okType: 'danger',
			onOk: async () => {
				const res = await deleteCatItem(item._id);
				if (res.data?.success) {
					await getCatListService();
				} else {
					notification['error']({
						message: '删除图片失败！',
						description: res.data?.msg,
					});
				}
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	handleSetShowFigure = (item: ImageItemType) => async () => {
		item.show = !item.show;
		await this.changeInfo(item);
	};

	handleEdit = (item: ImageItemType) => () => {
		this.setState({
			visible: true,
			editItem: { ...item } as CatItemType,
		});
	};

	changeInfo = async (item: ImageItemType) => {
		const res = await changeCatInfo(item);
		if (res.data?.success) {
			this.props.catStore.setItem(item as CatItemType);
		} else {
			notification['error']({
				message: '修改图片信息失败！',
				description: res.data?.msg,
			});
		}
	};

	handleOk = async () => {
		this.setState({
			confirmLoading: true,
		});
		try {
			const { editItem } = this.state;
			if (editItem) {
				await this.changeInfo(editItem);
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

	handleChangeChecked = (item: ImageItemType) => () => {
		this.props.catStore.setItem({
			...item,
			...{ checked: !item.checked },
		} as CatItemType);
	};

	render() {
		const { visible, confirmLoading, editItem } = this.state;

		const { list, loading } = this.props.catStore;

		const { catAlias } = this.props.homepageStore;

		return (
			<>
				<BasicWrapComponent
					needEdit={false}
					title={`${catAlias}图片`}
					note={`一次最多上传${MAX_IMAGE_COUNT}张图片，图片需小于500k`}>
					<Spin spinning={loading}>
						<ImageShowAndUploadComponent
							multiple={true}
							imageList={list}
							onUploadImage={this.onAddCatPicture}
							render={({ item, index, observer }) => (
								<section className="cat-list_item">
									<Checkbox
										className="cat-list_checkbox"
										onChange={this.handleChangeChecked(item)}
										checked={item.checked}
									/>
									<ImageCardComponent
										onClick={this.handleChangeChecked(item)}
										observer={observer as IntersectionObserver}
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
								</section>
							)}
						/>
					</Spin>
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
