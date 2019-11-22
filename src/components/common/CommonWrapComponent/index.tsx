import React, { FC, ReactNode, useState } from 'react';
import { observer } from 'mobx-react';

import { Button, Col, Divider, Row, Typography } from 'antd';
import CommonGap from '../CommonGap';

import compose from '@/utils/compose';

import './style.scss';

const { Title, Text } = Typography;

export type ICommonWrapComponentPropType = {
	title: string;

	note?: string;
	render?: (isEditing: boolean) => ReactNode;

	handleEdit?: () => boolean;
	needEdit?: boolean;
};

const CommonWrapComponent: FC<ICommonWrapComponentPropType> = props => {
	const [isEditing, setIsEditing] = useState(false);

	const { title, children, handleEdit, needEdit = true, render, note } = props;

	const handleClickEdit = () => {
		if (handleEdit && isEditing && handleEdit()) {
			setIsEditing(false);
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
// 不加observer不会响应menuList的更改而更新，mobx的问题
export default compose<FC<ICommonWrapComponentPropType>>(observer)(
	CommonWrapComponent,
);
