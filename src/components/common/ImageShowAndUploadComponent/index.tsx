import React, { ReactNode } from 'react';

import { Icon, Upload, Modal, Typography } from 'antd';
import ImageCardComponent from '@/components/common/ImageCardComponent';
import Gap from '@/components/common/Gap';

import { RcCustomRequestOptions } from 'antd/lib/upload/interface';
import { ImageListType, ImageItemType } from '@/types/image';

import { uploadFile } from '@/service/upload';

import {
	ACTION_ICON_SIZE,
	MAX_IMAGE_COUNT,
	MAX_IMAGE_SIZE,
	UPLOAD_IMAGE_TYPE,
} from '@/utils/constant';

import { formatSize } from '@/utils/format';

import './style.scss';

const iconStyle = {
	fontSize: ACTION_ICON_SIZE,
};
const { Text } = Typography;

export type ImageShowAndUploadComponentPropType = {
	imageList: ImageListType;
	onUploadImage: (params: ImageListType) => void;
	render: (params: { item: ImageItemType; index: number }) => ReactNode;

	disabled?: boolean;
	multiple?: boolean;
};

export type ImageShowAndUploadComponentStateType = Readonly<{
	stateDisabled: boolean;
	showModal: boolean;
	fileList: Array<{ file: File; checked: boolean; data: string }>;
	confirmLoading: boolean;
}>;

export default class ImageShowAndUploadComponent extends React.Component<
	ImageShowAndUploadComponentPropType,
	ImageShowAndUploadComponentStateType
> {
	readonly state: ImageShowAndUploadComponentStateType = {
		stateDisabled: false,
		fileList: [],
		showModal: false,
		confirmLoading: false,
	};

	handleCustomUpload = (options: RcCustomRequestOptions) => {
		const { multiple, onUploadImage } = this.props;
		const { file } = options;
		if (multiple) {
			const { fileList, showModal } = this.state;

			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = e => {
				if (e.target && e.target.result) {
					fileList.push({
						file,
						checked: file.size < MAX_IMAGE_SIZE * 1024,
						data: e.target.result as string,
					});
					if (fileList.length && !showModal) {
						this.setState({
							showModal: true,
						});
					}
					this.setState({
						fileList,
					});
				}
			};
			return;
		}
		this.setState({
			stateDisabled: true,
		});
		uploadFile(file).then(({ url, title, objectId }) => {
			onUploadImage([
				{
					url,
					title,
					objectId,
				} as ImageItemType,
			]);
			this.setState({
				stateDisabled: false,
			});
		});
	};

	handleOk = () => {
		this.setState({
			confirmLoading: true,
		});
		const { fileList } = this.state;
		if (fileList.length) {
			const uploadFilePromise = fileList
				.map(({ file, checked }) => {
					if (checked) {
						return uploadFile(file);
					}
					return null;
				})
				.filter(value => value);

			Promise.all(uploadFilePromise)
				.then(res => {
					if (res && res.length) {
						this.props.onUploadImage(res as ImageListType);
						this.setState({
							showModal: false,
							fileList: [],
						});
					}
				})
				.finally(() => {
					this.setState({
						confirmLoading: false,
					});
				});
		}
	};

	handleCancel = () => {
		if (!this.state.confirmLoading) {
			this.setState({
				showModal: false,
				fileList: [],
			});
		}
	};

	handleSelect = (index: number) => () => {
		const { fileList } = this.state;
		const checked = fileList[index].checked;
		fileList[index].checked = !checked;
		this.setState({
			fileList,
		});
	};

	get fileCheckedLength() {
		return this.state.fileList.filter(file => file.checked).length;
	}

	get overCount() {
		return this.fileCheckedLength > MAX_IMAGE_COUNT;
	}

	get canSubmitFile() {
		return !this.overCount && this.fileCheckedLength > 0;
	}

	render() {
		const {
			imageList,
			disabled = false,
			render,
			multiple = false,
		} = this.props;
		const { stateDisabled, fileList, confirmLoading, showModal } = this.state;
		return (
			<ul className="image-upload_list">
				{imageList.map((item, index) => (
					<li key={item.objectId} className="image-upload_item">
						{render({ item, index })}
					</li>
				))}
				<li className="image-upload_input">
					<Upload
						multiple={multiple}
						disabled={disabled || stateDisabled}
						customRequest={this.handleCustomUpload}
						accept={UPLOAD_IMAGE_TYPE}
						listType="picture-card"
						showUploadList={false}>
						<div>
							<Icon type="plus" />
							<div className="ant-upload-text">上传图片</div>
						</div>
					</Upload>
					<Modal
						maskClosable={false}
						closable={false}
						keyboard={false}
						title={
							<>
								<h3 className="image-load-modal_title">上传图片</h3>
								{this.overCount && (
									<Text type="danger" className="image-load-modal_tip">
										当前可用图片有{this.fileCheckedLength}张，请选择其中
										{MAX_IMAGE_COUNT}张
									</Text>
								)}
							</>
						}
						visible={showModal}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
						okButtonProps={{ disabled: !this.canSubmitFile }}
						confirmLoading={confirmLoading}>
						<ul className="image-upload-preview__list">
							{fileList.map(({ file, checked, data }, index: number) => {
								const isOverSize = file.size > MAX_IMAGE_SIZE * 1024;
								return (
									<li className="image-upload-preview__item" key={`${index}`}>
										<ImageCardComponent
											onClick={this.handleSelect(index)}
											width={'100%'}
											height={200}
											url={data}
											actions={
												!isOverSize
													? [
															<Icon
																type="check-circle"
																style={{
																	...iconStyle,
																	...{ color: checked ? '#1890ff' : '' },
																}}
															/>,
													  ]
													: []
											}
										/>
										{isOverSize && (
											<>
												<Gap />
												<Text type="danger">
													该图片大小为{formatSize(file.size)}，超过
													{MAX_IMAGE_SIZE}k，请压缩后上传
												</Text>{' '}
												<Gap />
											</>
										)}
									</li>
								);
							})}
						</ul>
					</Modal>
				</li>
			</ul>
		);
	}
}
