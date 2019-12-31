import React, { FC, ReactNode, useState } from 'react';

import { inject, observer } from 'mobx-react';

import { Button, Col, Divider, notification, Row, Typography } from 'antd';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';

import compose from '@/utils/compose';

import './style.scss';

const { Title, Text } = Typography;

export type BasicWrapComponentPropType = {
	title: string;

	note?: string;
	needEdit?: boolean;

	render?: (isEditing: boolean) => ReactNode;
	handleEdit?: () => Promise<any>;

	operation?: ReactNode;
};

const BasicWrapComponent: FC<BasicWrapComponentPropType &
	Pick<StoreType, 'globalStore'>> = props => {
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
		operation,
	} = props;

	const handleClickEdit = async () => {
		try {
			if (handleEdit && isEditing) {
				globalStore.startLoading();
				await handleEdit();
				setIsEditing(false);
			}
			if (!isEditing) {
				setIsEditing(true);
			}
		} catch (e) {
			if (e.message && e.name !== 'Error') {
				notification['error']({
					message: e.name,
					description: e.message,
				});
			}
		} finally {
			globalStore.endLoading();
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
						<Text className="common-wrap_note" type="warning">
							{note}
						</Text>
					</Col>
					{operation}
					{Boolean(!operation && needEdit) && (
						<Button type="link" onClick={handleClickEdit}>
							{isEditing ? '完成' : '编辑'}
						</Button>
					)}
				</Row>
				<Divider style={{ margin: '10px 0' }} />
			</Col>
			<Col>{render ? render(isEditing) : children}</Col>
			<Col>
				<Gap size="xl" />
			</Col>
		</Row>
	);
};

export default compose<FC<BasicWrapComponentPropType>>(
	inject('globalStore'),
	observer,
)(BasicWrapComponent);
