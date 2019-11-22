import React, { ChangeEvent } from 'react';

import { Button, Icon } from 'antd';

import { uploadFile } from '@/service/upload';

import './style.scss';

export type IUploadFileComponentPropType = {
	label: string;

	accept?: string;
	disabled?: boolean;

	onUploadFile: (params: { fileUrl: string; fileName: string }) => void;
};

export type IUploadFileComponentStateType = Readonly<{
	compLoading: boolean;
	compDisabled: boolean;
}>;

export default class UploadFileComponent extends React.Component<
	IUploadFileComponentPropType,
	IUploadFileComponentStateType
> {
	readonly state = {
		compLoading: false,
		compDisabled: false,
	};

	handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			this.setState({
				compLoading: true,
				compDisabled: true,
			});
			// 通用上传文件，返回文件url和文件名
			uploadFile(e.target.files[0], ({ url, name }) => {
				this.props.onUploadFile({ fileUrl: url, fileName: name });
				this.setState({
					compLoading: false,
					compDisabled: false,
				});
			});
		}
	};

	render() {
		const { disabled = false, accept = '' } = this.props;
		const { compLoading, compDisabled } = this.state;
		return (
			<section className="upload-file">
				<Button loading={compLoading}>
					<Icon type="upload" /> {this.props.label}
				</Button>
				<input
					accept={accept}
					type="file"
					onChange={this.handleChange}
					className="upload-file_input"
					disabled={disabled || compDisabled}
				/>
			</section>
		);
	}
}
