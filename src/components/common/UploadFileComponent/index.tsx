import React, { ChangeEvent } from 'react';

import { Button, Icon } from 'antd';

import { uploadService } from '@/service/uploadService';

import './style.scss';

export type UploadFileComponentPropType = {
	label: string;

	size?: number;
	accept?: string;
	disabled?: boolean;

	onUploadFile: (params: { fileUrl: string; fileName: string }) => void;
};

export type UploadFileComponentStateType = Readonly<{
	compLoading: boolean;
	compDisabled: boolean;
}>;

export default class UploadFileComponent extends React.Component<
	UploadFileComponentPropType,
	UploadFileComponentStateType
> {
	readonly state: UploadFileComponentStateType = {
		compLoading: false,
		compDisabled: false,
	};

	handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { size, accept } = this.props;

		if (e.target.files) {
			this.setState({
				compLoading: true,
				compDisabled: true,
			});
			// 通用上传文件，返回文件url和文件名
			uploadService({ file: e.target.files[0], size, accept })
				.then(({ url, title }) => {
					this.props.onUploadFile({ fileUrl: url, fileName: title });
				})
				.finally(() => {
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
