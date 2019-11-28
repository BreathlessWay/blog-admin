import React, { ChangeEvent, Component, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Col, Input, Row, Typography } from 'antd';
import BasicWrapComponent from '@/components/business/BasicWrapComponent';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';

import { EPersonalChangeType } from '@/store/UserStore/user.enum';

const { Text } = Typography;
const { TextArea } = Input;

export type IPersonalInfoComponentPropType = Pick<StoreType, 'userStore'>;

export type IPersonalInfoComponentStateType = Readonly<{
	titleError: boolean;
	infoError: boolean;
	introError: boolean;
}>;

@inject('userStore')
@observer
class PersonalInfoComponent extends Component<
	IPersonalInfoComponentPropType,
	IPersonalInfoComponentStateType
> {
	readonly state = {
		titleError: false,
		infoError: false,
		introError: false,
	};

	handleEdit = () => {
		return new Promise((resolve, reject) => {
			const {
				personalTitle,
				personalInfo,
				personalIntro,
			} = this.props.userStore.userDetail;
			this.setState({
				titleError: !personalTitle.trim(),
				infoError: !personalInfo.trim(),
				introError: !personalIntro.trim(),
			});
			if (personalTitle.trim() && personalInfo.trim() && personalIntro.trim()) {
				resolve();
			} else {
				reject();
			}
		});
	};

	handleChangeContent = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		type: EPersonalChangeType,
	) => {
		const value = e.target.value;
		switch (type) {
			case EPersonalChangeType.personalTitle:
				this.props.userStore.setPersonalInfo({ type, value });
				this.setState({
					titleError: !value.trim(),
				});
				break;
			case EPersonalChangeType.personalInfo:
				this.props.userStore.setPersonalInfo({ type, value });
				this.setState({
					infoError: !value.trim(),
				});
				break;
			case EPersonalChangeType.personalIntro:
				this.props.userStore.setPersonalInfo({ type, value });
				this.setState({
					introError: !value.trim(),
				});
				break;
		}
	};

	render() {
		const {
			personalTitle,
			personalInfo,
			personalIntro,
		} = this.props.userStore.userDetail;
		const { titleError, infoError, introError } = this.state;
		return (
			<BasicWrapComponent
				title="个人信息"
				handleEdit={this.handleEdit}
				render={isEditing => (
					<Row>
						<Col>
							<Text>标题：</Text>
							<Gap />
							<Input
								placeholder="请输入标题"
								allowClear={true}
								onChange={event =>
									this.handleChangeContent(
										event,
										EPersonalChangeType.personalTitle,
									)
								}
								value={personalTitle}
								disabled={!isEditing}
								maxLength={20}
							/>
						</Col>
						<Col span={24}>
							{titleError && <Text type="danger">标题不能为空</Text>}
						</Col>
						<Col>
							<Gap />
							<Text>个人简介：</Text>
							<Gap />
							<Input
								placeholder="请输入个人简介"
								allowClear={true}
								onChange={event =>
									this.handleChangeContent(
										event,
										EPersonalChangeType.personalInfo,
									)
								}
								value={personalInfo}
								maxLength={200}
								disabled={!isEditing}
							/>
						</Col>
						<Col span={24}>
							{infoError && <Text type="danger">个人简介不能为空</Text>}
						</Col>
						<Col>
							<Gap />
							<Text>自我介绍：</Text>
							<Gap />
							<TextArea
								placeholder="请输入自我介绍"
								onChange={event =>
									this.handleChangeContent(
										event,
										EPersonalChangeType.personalIntro,
									)
								}
								value={personalIntro}
								disabled={!isEditing}
								maxLength={400}
								autoSize={true}
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
