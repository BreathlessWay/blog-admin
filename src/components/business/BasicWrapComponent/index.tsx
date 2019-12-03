import React, { FC, ReactNode, useState } from 'react';

import { inject, observer } from 'mobx-react';

import { Button, Col, Divider, Row, Typography } from 'antd';
import Gap from '@/components/common/Gap';

import { StoreType } from '@/store/store';

import compose from '@/utils/compose';

import './style.scss';

const { Title, Text } = Typography;

export type IBasicWrapComponentPropType = {
	title: string;

	note?: string;
	needEdit?: boolean;

	render?: (isEditing: boolean) => ReactNode;
	handleEdit?: () => Promise<any>;
};

const BasicWrapComponent: FC<IBasicWrapComponentPropType &
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
					globalStore.endLoading();
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
				<Gap size="xl" />
			</Col>
		</Row>
	);
};

export default compose<FC<IBasicWrapComponentPropType>>(
	inject('globalStore'),
	observer,
)(BasicWrapComponent);
