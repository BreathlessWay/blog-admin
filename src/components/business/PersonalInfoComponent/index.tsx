import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col, Input, Row, Typography } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';
import { UserDetailType } from '@/types/user';

import { EPersonalChangeKey } from '@/store/UserStore/user.enum';
import { MAX_LENGTH_LG, MAX_LENGTH_MD, MAX_LENGTH_XXL } from '@/utils/constant';

import { updateUserService } from '@/service/userService';

const { Text } = Typography;
const { TextArea } = Input;

export type PersonalInfoComponentPropType = Pick<StoreType, 'userStore'>;

export type PersonalInfoComponentStateType = Readonly<{
	titleError: boolean;
	infoError: boolean;
	introError: boolean;
}>;

@inject('userStore')
@observer
class PersonalInfoComponent extends Component<
	PersonalInfoComponentPropType,
	PersonalInfoComponentStateType
> {
	readonly state: PersonalInfoComponentStateType = {
		titleError: false,
		infoError: false,
		introError: false,
	};

	handleEdit = async () => {
		const { personalTitle, personalInfo, personalIntro } = this.props.userStore
			.userDetail as UserDetailType;
		try {
			if (personalTitle.trim() && personalInfo.trim() && personalIntro.trim()) {
				return updateUserService({
					personalTitle,
					personalInfo,
					personalIntro,
				});
			}
		} catch (e) {
			throw new Error();
		} finally {
			this.setState({
				titleError: !personalTitle || !personalTitle.trim(),
				infoError: !personalInfo || !personalInfo.trim(),
				introError: !personalIntro || !personalIntro.trim(),
			});
		}
	};

	handleChangeContent = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		key: EPersonalChangeKey,
	) => {
		const value = e.target.value;
		switch (key) {
			case EPersonalChangeKey.personalTitle:
				this.props.userStore.setPersonalInfo({ key, value });
				this.setState({
					titleError: !value.trim(),
				});
				break;
			case EPersonalChangeKey.personalInfo:
				this.props.userStore.setPersonalInfo({ key, value });
				this.setState({
					infoError: !value.trim(),
				});
				break;
			case EPersonalChangeKey.personalIntro:
				this.props.userStore.setPersonalInfo({ key, value });
				this.setState({
					introError: !value.trim(),
				});
				break;
		}
	};

	render() {
		const { personalTitle, personalInfo, personalIntro } =
			this.props.userStore.userDetail || {};
		const { titleError, infoError, introError } = this.state;

		return (
			<BasicWrapComponent
				title="个人信息"
				handleEdit={this.handleEdit}
				render={isEditing => (
					<Row>
						<Col>
							<label htmlFor="personalTitle">标题：</label>
							<Gap />
							<Input
								id="personalTitle"
								placeholder="请输入标题"
								allowClear={true}
								onChange={event =>
									this.handleChangeContent(
										event,
										EPersonalChangeKey.personalTitle,
									)
								}
								value={personalTitle}
								disabled={!isEditing}
								maxLength={MAX_LENGTH_MD}
							/>
						</Col>
						<Col span={24}>
							{titleError && <Text type="danger">标题不能为空</Text>}
						</Col>
						<Col>
							<Gap />
							<label htmlFor="personalInfo">个人简介：</label>
							<Gap />
							<Input
								id="personalInfo"
								placeholder="请输入个人简介"
								allowClear={true}
								onChange={event =>
									this.handleChangeContent(
										event,
										EPersonalChangeKey.personalInfo,
									)
								}
								value={personalInfo}
								maxLength={MAX_LENGTH_LG}
								disabled={!isEditing}
							/>
						</Col>
						<Col span={24}>
							{infoError && <Text type="danger">个人简介不能为空</Text>}
						</Col>
						<Col>
							<Gap />
							<label htmlFor="personalIntro">自我介绍：</label>
							<Gap />
							<TextArea
								id="personalIntro"
								placeholder="请输入自我介绍"
								onChange={event =>
									this.handleChangeContent(
										event,
										EPersonalChangeKey.personalIntro,
									)
								}
								value={personalIntro}
								disabled={!isEditing}
								maxLength={MAX_LENGTH_XXL}
								rows={4}
							/>
						</Col>
						<Col>
							{introError && <Text type="danger">自我介绍不能为空</Text>}
						</Col>
					</Row>
				)}
			/>
		);
	}
}

export default (PersonalInfoComponent as unknown) as ComponentClass;
