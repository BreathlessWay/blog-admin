import React, { FC, ReactNode, useState } from "react";
import { observer } from "mobx-react";

import { Button, Col, Divider, Row, Typography } from "antd";
import CommonGap from "../CommonGap";

const {Title} = Typography;

export type ICommonWrapComponentPropType = {
	title: string
	handleEdit: () => boolean
	children: (isEditing: boolean) => ReactNode
}

const CommonWrapComponent: FC<ICommonWrapComponentPropType> = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const handleEdit = () => {
		if (isEditing && props.handleEdit()) {
			setIsEditing(false);
		}
		if (!isEditing) {
			setIsEditing(true);
		}
	};

	return <Row>
		<Col>
			<Row align="middle" justify="space-between" type="flex">
				<Title level={4} style={{margin: 0}}>{props.title}</Title>
				<Button type="link" onClick={handleEdit}>{isEditing ? "完成" : "编辑"}</Button>
			</Row>
			<Divider style={{margin: "10px 0"}}/>
		</Col>
		<Col>
			{props.children(isEditing)}
		</Col>
		<Col>
			<CommonGap size="xl"/>
		</Col>
	</Row>;
};
// 不加observer不会响应menuList的更改而更新，mobx的问题
export default observer(CommonWrapComponent);
