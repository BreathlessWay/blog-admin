import React, { FC, ReactNode, useState } from 'react';
import { inject, observer } from 'mobx-react';

import { Button, Col, Divider, Row, Typography } from 'antd';
import CommonGap from '@/components/common/CommonGap';

import GlobalStore from '@/store/GlobalStore';

import compose from '@/utils/compose';

import './style.scss';

const { Title, Text } = Typography;

export type ICommonWrapComponentPropType = {
	title: string;

	note?: string;
	render?: (isEditing: boolean) => ReactNode;

	handleEdit?: () => Promise<any>;
	needEdit?: boolean;
};

const CommonWrapComponent: FC<ICommonWrapComponentPropType & {
	globalStore: GlobalStore;
}> = props => {
	// 不能提到globalStore，每个表单的isEditing是独立的
	const [isEditing, setIsEditing] = useState(false);

	const {
		title,
		children,
		handleEdit,
		needEdit = true,
		render,
		note,
		globalStore,
	} = props;

	const handleClickEdit = () => {
		if (handleEdit && isEditing) {
			globalStore.startLoading();
			handleEdit()
				.then(() => {
					setIsEditing(false);
				})
				.catch(() => {})
				.finally(() => {
					setTimeout(() => {
						globalStore.endLoading();
					}, 2000);
				});
		}
		if (!isEditing) {
			setIsEditing(true);
		}
	};

	return (
		<Row>
			<Col>
				<Row align="middle" justify="space-between" type="flex">
					<Col>
						<Title level={4} className="common-wrap_title">
							{title}
						</Title>
						<Text className="common-wrap_note" type="danger">
							{note}
						</Text>
					</Col>
					{needEdit && (
						<Button type="link" onClick={handleClickEdit}>
							{isEditing ? '完成' : '编辑'}
						</Button>
					)}
				</Row>
				<Divider style={{ margin: '10px 0' }} />
			</Col>
			<Col>{render ? render(isEditing) : children}</Col>
			<Col>
				<CommonGap size="xl" />
			</Col>
		</Row>
	);
};

export default compose<FC<ICommonWrapComponentPropType>>(
	inject('globalStore'),
	observer,
)(CommonWrapComponent);
