import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col, Input, Row, Switch, Modal } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import Gap from '@/components/common/Gap';
import RewardComponentItem from './item';

import { StoreType } from '@/store/store';

import { ERewardChangeKey } from '@/store/UserStore/user.enum';
import { MAX_LENGTH_SM } from '@/utils/constant';

import './style.scss';

const { confirm } = Modal;

export type RewardComponentPropType = Pick<StoreType, 'userStore'>;

@inject('userStore')
@observer
class RewardComponent extends Component<RewardComponentPropType> {
	handleEdit = () => {
		return new Promise((resolve, reject) => {
			resolve();
		});
	};

	handleChangeSwitch = () => {
		const {
			userDetail: { rewardEnable },
			setPersonalInfo,
		} = this.props.userStore;
		setPersonalInfo({
			key: ERewardChangeKey.rewardEnable,
			value: !rewardEnable,
		});
	};

	handleChangeRewardTitle = (e: ChangeEvent<HTMLInputElement>) => {
		this.props.userStore.setPersonalInfo({
			key: ERewardChangeKey.rewardTitle,
			value: e.target.value,
		});
	};

	handleDelete = ({ key }: { key: ERewardChangeKey }) => () => {
		const _this = this;
		confirm({
			title: '是否确认删除该二维码？',
			okType: 'danger',
			onOk() {
				_this.props.userStore.setPersonalInfo({
					key: key,
					value: '',
				});
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	handleUpload = ({ key, url }: { key: ERewardChangeKey; url: string }) => {
		this.props.userStore.setPersonalInfo({
			key: key,
			value: url,
		});
	};

	render() {
		const {
			rewardTitle,
			zfbCode,
			wxCode,
			rewardEnable,
		} = this.props.userStore.userDetail;
		return (
			<BasicWrapComponent
				title="打赏"
				note={`打赏标题最长${MAX_LENGTH_SM}个字`}
				handleEdit={this.handleEdit}
				render={isEditing => (
					<Row type="flex">
						<Col>
							{rewardEnable ? '关闭' : '开启'}打赏功能：{' '}
							<Switch
								disabled={!isEditing}
								checked={rewardEnable}
								onChange={this.handleChangeSwitch}
							/>
						</Col>
						<Gap />
						<Col>
							<label htmlFor="rewardTitle">打赏标题：</label>
						</Col>
						<Gap />
						<Col span={12}>
							<Input
								placeholder="请输入打赏标题"
								id="rewardTitle"
								disabled={!isEditing}
								value={rewardTitle}
								allowClear={true}
								maxLength={MAX_LENGTH_SM}
								onChange={this.handleChangeRewardTitle}
							/>
						</Col>
						<Gap />
						<Col>打赏二维码：</Col>
						<Gap />
						<Col>
							<ul className="reward-code_list">
								<RewardComponentItem
									disabled={!isEditing}
									url={zfbCode}
									title={'支付宝二维码'}
									onDeleteCode={this.handleDelete({
										key: ERewardChangeKey.zfbCode,
									})}
									onUploadCode={url =>
										this.handleUpload({
											key: ERewardChangeKey.zfbCode,
											url,
										})
									}
								/>
								<RewardComponentItem
									disabled={!isEditing}
									url={wxCode}
									title={'微信二维码'}
									onDeleteCode={this.handleDelete({
										key: ERewardChangeKey.wxCode,
									})}
									onUploadCode={url =>
										this.handleUpload({
											key: ERewardChangeKey.wxCode,
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
