import React from 'react';

import { Icon, Row, Col, Upload } from 'antd';
import Gap from '@/components/common/Gap';
import ImageLoadComponent from '@/components/common/ImageLoadComponent';

import { RcCustomRequestOptions } from 'antd/lib/upload/interface';
import { UPLOAD_IMAGE_TYPE } from '@/utils/constant';

import { uploadService } from '@/service/uploadService';

import './style.scss';

export type RewardComponentItemPropType = {
	url: string;
	title: string;
	disabled?: boolean;
	onDeleteCode: () => void;
	onUploadCode: (url: string) => void;
};

export type RewardComponentItemStateType = Readonly<{
	disabled: boolean;
}>;

export default class RewardComponentItem extends React.Component<
	RewardComponentItemPropType,
	RewardComponentItemStateType
> {
	readonly state: RewardComponentItemStateType = {
		disabled: false,
	};

	handleCustomUpload = (options: RcCustomRequestOptions) => {
		this.setState({
			disabled: true,
		});

		uploadService(options.file).then(({ url }) => {
			this.props.onUploadCode(url);
			this.setState({
				disabled: false,
			});
		});
	};

	renderContent = () => {
		const { url, title } = this.props;
		return (
			<div className="reward-code_image">
				<ImageLoadComponent url={url} height={180} title={title} />
			</div>
		);
	};

	renderAction = () => {
		const { url, onDeleteCode } = this.props;
		const span = url ? 12 : 24;

		return (
			<>
				<Col className="reward-code_action" span={span}>
					{this.renderUploadIcon()}
				</Col>
				{url && (
					<Col className="reward-code_action" span={span}>
						<Icon
							type="delete"
							className="reward-code_icon"
							onClick={onDeleteCode}
						/>
					</Col>
				)}
			</>
		);
	};

	renderUploadIcon = () => {
		const { disabled } = this.state;

		return (
			<Upload
				showUploadList={false}
				disabled={disabled}
				customRequest={this.handleCustomUpload}
				accept={UPLOAD_IMAGE_TYPE}>
				<Icon type="upload" className="reward-code_icon" />
			</Upload>
		);
	};

	render() {
		const { title, disabled } = this.props;

		return (
			<li className="reward-code_item">
				{this.renderContent()}
				{!disabled && <Row type="flex">{this.renderAction()}</Row>}
				<Gap />
				<span>{title}</span>
			</li>
		);
	}
}
