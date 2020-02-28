import React, { ChangeEvent, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Row, Col, Input, Typography } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';
import { UserDetailType } from '@/types/user';

import { EMottoChangeKey } from '@/store/UserStore/user.enum';
import { MAX_LENGTH_LG, MAX_LENGTH_MD } from '@/utils/constant';

import { updateUserService } from '@/service/userService';

import './style.scss';

const { TextArea } = Input;

const { Text } = Typography;

export type MottoComponentPropType = Pick<
	StoreType,
	'userStore' | 'globalStore'
>;

export type MottoComponentStateType = Readonly<{
	enError: boolean;
	zhError: boolean;
	introError: boolean;
}>;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	globalStore: allStore.globalStore,
}))
@observer
class MottoComponent extends React.Component<
	MottoComponentPropType,
	MottoComponentStateType
> {
	readonly state: MottoComponentStateType = {
		enError: false,
		zhError: false,
		introError: false,
	};

	handleEdit = async () => {
		const { en, zh, intro } = this.props.userStore.userDetail as UserDetailType;

		try {
			if (en.trim() && zh.trim() && intro.trim()) {
				// 提交更新
				return updateUserService({
					en,
					zh,
					intro,
				});
			} else {
				throw new Error();
			}
		} catch (e) {
			throw new Error();
		} finally {
			this.setState({
				enError: !en || !en.trim(),
				zhError: !zh || !zh.trim(),
				introError: !intro || !intro.trim(),
			});
		}
	};

	handleChangeEn = (e: ChangeEvent<HTMLInputElement>) => {
		this.props.userStore.setPersonalInfo({
			key: EMottoChangeKey.en,
			value: e.target.value,
		});
	};

	handleChangeZh = (e: ChangeEvent<HTMLInputElement>) => {
		this.props.userStore.setPersonalInfo({
			key: EMottoChangeKey.zh,
			value: e.target.value,
		});
	};

	handleChangeIntro = (e: ChangeEvent<HTMLTextAreaElement>) => {
		this.props.userStore.setPersonalInfo({
			key: EMottoChangeKey.intro,
			value: e.target.value,
		});
	};

	render() {
		const { en, zh, intro } = this.props.userStore.userDetail || {};
		const { enError, zhError, introError } = this.state;

		return (
			<BasicWrapComponent
				title="座右铭"
				handleEdit={this.handleEdit}
				render={isEditing => (
					<Row>
						<Col>
							<label htmlFor="en">短句：</label>
							<Gap />
							<Input
								id="en"
								placeholder="请输入短句"
								allowClear={true}
								onChange={this.handleChangeEn}
								value={en}
								disabled={!isEditing}
								maxLength={MAX_LENGTH_MD}
							/>
						</Col>
						<Col>{enError && <Text type="danger">短句不能为空</Text>}</Col>
						<Col>
							<Gap />
							<label htmlFor="zh">座右铭：</label>
							<Gap />
							<Input
								id="zh"
								placeholder="请输入座右铭"
								allowClear={true}
								onChange={this.handleChangeZh}
								value={zh}
								maxLength={MAX_LENGTH_MD}
								disabled={!isEditing}
							/>
						</Col>
						<Col>{zhError && <Text type="danger">座右铭不能为空</Text>}</Col>
						<Col>
							<Gap />
							<label htmlFor="intro">简介：</label> <Gap />
							<TextArea
								id="intro"
								placeholder="请输入简介"
								onChange={this.handleChangeIntro}
								value={intro}
								disabled={!isEditing}
								maxLength={MAX_LENGTH_LG}
								rows={3}
							/>
						</Col>
						<Col>{introError && <Text type="danger">简介不能为空</Text>}</Col>
					</Row>
				)}
			/>
		);
	}
}

export default (MottoComponent as unknown) as ComponentClass;
