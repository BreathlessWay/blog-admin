import React, { ChangeEvent, ComponentClass } from 'react';

import { inject, observer } from 'mobx-react';

import { Row, Col, Input, Typography } from 'antd';
import CommonWrapComponent from '@/components/business/CommonWrapComponent';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';

import './style.scss';

const { TextArea } = Input;

const { Text } = Typography;

export type IMottoComponentPropType = StoreType;

export type IMottoComponentStateType = Readonly<{
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
	IMottoComponentPropType,
	IMottoComponentStateType
> {
	readonly state = {
		enError: false,
		zhError: false,
		introError: false,
	};

	handleEdit = () => {
		return new Promise((resolve, reject) => {
			const { en, zh, intro } = this.props.userStore.userDetail;
			if (en.trim() && zh.trim() && intro.trim()) {
				this.setState({
					enError: false,
					zhError: false,
					introError: false,
				});
				// 提交更新
				resolve();
			} else {
				this.setState({
					enError: !en.trim(),
					zhError: !zh.trim(),
					introError: !intro.trim(),
				});
				reject();
			}
		});
	};

	handleChangeEn = (e: ChangeEvent<HTMLInputElement>) => {
		this.props.userStore.setMotto({
			key: 'en',
			value: e.target.value,
		});
	};

	handleChangeZh = (e: ChangeEvent<HTMLInputElement>) => {
		this.props.userStore.setMotto({
			key: 'zh',
			value: e.target.value,
		});
	};

	handleChangeIntro = (e: ChangeEvent<HTMLTextAreaElement>) => {
		this.props.userStore.setMotto({
			key: 'intro',
			value: e.target.value,
		});
	};

	render() {
		const { en, zh, intro } = this.props.userStore.userDetail;
		const { enError, zhError, introError } = this.state;
		return (
			<CommonWrapComponent
				title="菜单栏"
				handleEdit={this.handleEdit}
				render={isEditing => (
					<Row>
						<Col>
							<Text>短句：</Text>
							<Gap />
							<Input
								placeholder="请输入短句"
								allowClear={true}
								onChange={this.handleChangeEn}
								value={en}
								disabled={!isEditing}
								maxLength={20}
							/>
						</Col>
						<Col>{enError && <Text type="danger">短句不能为空</Text>}</Col>
						<Col>
							<Gap />
							<Text>座右铭：</Text>
							<Gap />
							<Input
								placeholder="请输入座右铭"
								allowClear={true}
								onChange={this.handleChangeZh}
								value={zh}
								maxLength={20}
								disabled={!isEditing}
							/>
						</Col>
						<Col>{zhError && <Text type="danger">座右铭不能为空</Text>}</Col>
						<Col>
							<Gap />
							<Text>简介：</Text>
							<Gap />
							<TextArea
								placeholder="请输入简介"
								onChange={this.handleChangeIntro}
								value={intro}
								disabled={!isEditing}
								maxLength={200}
								autoSize={true}
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
