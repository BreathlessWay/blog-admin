import React from 'react';

import { Icon, Row, Col, Upload } from 'antd';
import Gap from '@/components/common/Gap';
import ImageLazyLoadComponent from '@/components/common/ImageLazyLoadComponent';

import { RcCustomRequestOptions } from 'antd/lib/upload/interface';
import { UPLOAD_IMAGE_TYPE } from '@/utils/constant';

import { uploadFile } from '@/service/upload';

import './style.scss';

export type RewardComponentItemPropType = {
	url: string;
	title: string;
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
	readonly state = {
		disabled: false,
	};

	handleCustomUpload = (options: RcCustomRequestOptions) => {
		this.setState({
			disabled: true,
		});

		uploadFile(options.file).then(({ url }) => {
			this.props.onUploadCode(url);
			this.setState({
				disabled: false,
			});
		});
	};

	renderContent = () => {
		const { url, title } = this.props;
		return <ImageLazyLoadComponent url={url} width={180} title={title} />;
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
