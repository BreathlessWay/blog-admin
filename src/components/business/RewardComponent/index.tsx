import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col, Input, Row } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import Gap from '@/components/common/Gap';
import RewardComponentItem from './item';

import UserStore from '@/store/UserStore';

import { ERewardChangeType } from '@/store/UserStore/user.enum';

import './style.scss';

export type IRewardComponentPropType = {
	userStore: UserStore;
};

@inject('userStore')
@observer
class RewardComponent extends Component<IRewardComponentPropType> {
	handleEdit = () => {
		return new Promise((resolve, reject) => {
			resolve();
		});
	};
	handelChangeRewardTitle = (e: ChangeEvent<HTMLInputElement>) => {
		this.props.userStore.setPersonalInfo({
			type: ERewardChangeType.rewardTitle,
			value: e.target.value,
		});
	};

	handleDelete = ({ key }: { key: ERewardChangeType }) => () => {
		this.props.userStore.setPersonalInfo({
			type: key,
			value: '',
		});
	};

	handleUpload = ({ key, url }: { key: ERewardChangeType; url: string }) => {
		this.props.userStore.setPersonalInfo({
			type: key,
			value: url,
		});
	};

	render() {
		const { rewardTitle, zfbCode, wxCode } = this.props.userStore.userDetail;
		return (
			<BasicWrapComponent
				title="打赏"
				handleEdit={this.handleEdit}
				render={isEditing => (
					<Row type="flex">
						<Col>打赏标题：</Col>
						<Gap />
						<Col span={12}>
							<Input
								disabled={!isEditing}
								value={rewardTitle}
								allowClear={true}
								maxLength={20}
								onChange={this.handelChangeRewardTitle}
							/>
						</Col>
						<Gap />
						<Col>打赏二维码：</Col>
						<Gap />
						<Col>
							<ul className="reward-code_list">
								<RewardComponentItem
									url={zfbCode}
									title={'支付宝二维码'}
									onDeleteCode={this.handleDelete({
										key: ERewardChangeType.zfbCode,
									})}
									onUploadCode={url =>
										this.handleUpload({
											key: ERewardChangeType.zfbCode,
											url,
										})
									}
								/>
								<RewardComponentItem
									url={wxCode}
									title={'微信二维码'}
									onDeleteCode={this.handleDelete({
										key: ERewardChangeType.wxCode,
									})}
									onUploadCode={url =>
										this.handleUpload({
											key: ERewardChangeType.wxCode,
											url,
										})
									}
								/>
							</ul>
						</Col>
					</Row>
				)}
			/>
		);
	}
}

export default (RewardComponent as unknown) as ComponentClass;
