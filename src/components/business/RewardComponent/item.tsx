import React from 'react';

import { Icon, Row, Col, Upload } from 'antd';
import Gap from '@/components/common/Gap';

import { RcCustomRequestOptions } from 'antd/lib/upload/interface';

import { uploadFile } from '@/service/upload';

import './style.scss';

export type IRewardComponentItemPropType = {
	url: string;
	title: string;
	onDeleteCode: () => void;
	onUploadCode: (url: string) => void;
};

export type IRewardComponentItemStateType = Readonly<{
	disabled: boolean;
}>;

export default class RewardComponentItem extends React.Component<
	IRewardComponentItemPropType,
	IRewardComponentItemStateType
> {
	readonly state = {
		disabled: false,
	};

	handleCustomUpload = (options: RcCustomRequestOptions) => {
		this.setState({
			disabled: true,
		});
		uploadFile(options.file, ({ url }) => {
			this.props.onUploadCode(url);
			this.setState({
				disabled: false,
			});
		});
	};

	renderContent = () => {
		const { url, title } = this.props;
		if (url) {
			return <img src={url} alt={title} className="reward-code_image" />;
		}
		return (
			<div className="reward-code_empty">
				<span>暂无图片</span>
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
				disabled={disabled}
				customRequest={this.handleCustomUpload}
				accept={'.jpg,.jpeg,.png'}>
				<Icon type="upload" className="reward-code_icon" />
			</Upload>
		);
	};

	render() {
		const { title } = this.props;

		return (
			<li className="reward-code_item">
				{this.renderContent()}
				<Row type="flex">{this.renderAction()}</Row>
				<Gap />
				<span>{title}</span>
			</li>
		);
	}
}