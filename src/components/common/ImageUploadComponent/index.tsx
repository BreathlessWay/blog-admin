import React, { Component } from 'react';

import { Icon, Modal, Typography, Upload, message } from 'antd';
import ImageCardComponent from '@/components/common/ImageCardComponent';
import Gap from '@/components/common/Gap';

import { RcCustomRequestOptions, UploadProps } from 'antd/lib/upload/interface';
import { ImageItemType, ImageListType } from '@/types/image';

import { formatSize } from '@/utils/format';

import {
	ACTION_ICON_SIZE,
	MAX_IMAGE_COUNT,
	MAX_IMAGE_SIZE,
} from '@/utils/constant';

import { uploadService } from '@/service/uploadService';

import './style.scss';

const { Text } = Typography;

const iconStyle = {
	fontSize: ACTION_ICON_SIZE,
};

export type ImageUploadComponentPropType = {
	onUploadImage: (params: ImageListType) => void;
} & UploadProps;

export type ImageUploadComponentStateType = Readonly<{
	showModal: boolean;
	fileList: Array<{ file: File; checked: boolean; data: string }>;
	confirmLoading: boolean;
	stateDisabled: boolean;
}>;

export default class ImageUploadComponent extends Component<
	ImageUploadComponentPropType,
	ImageUploadComponentStateType
> {
	readonly state: ImageUploadComponentStateType = {
		fileList: [],
		showModal: false,
		confirmLoading: false,
		stateDisabled: false,
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

	handleOk = () => {
		this.setState({
			confirmLoading: true,
		});
		const { fileList } = this.state;
		if (fileList.length) {
			const uploadFilePromise = fileList
				.map(({ file, checked }) => {
					if (checked) {
						return uploadService(file);
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

	handleCustomUpload = (options: RcCustomRequestOptions) => {
		message.destroy();
		const { multiple, onUploadImage } = this.props;
		const { file } = options;
		if (multiple) {
			const hide = message.loading('图片转码中...', 0);

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
					hide();
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
		uploadService(file)
			.then(({ url, title }) => {
				onUploadImage([
					{
						url,
						title,
					} as ImageItemType,
				]);
			})
			.finally(() => {
				this.setState({
					stateDisabled: false,
				});
			});
	};

	render() {
		const { children, onUploadImage, disabled, ...rest } = this.props;

		const { showModal, confirmLoading, fileList, stateDisabled } = this.state;
		return (
			<>
				<Upload
					{...rest}
					customRequest={this.handleCustomUpload}
					disabled={disabled || stateDisabled}>
					{children}
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
											</Text>
											<Gap />
										</>
									)}
								</li>
							);
						})}
					</ul>
				</Modal>
			</>
		);
	}
}
