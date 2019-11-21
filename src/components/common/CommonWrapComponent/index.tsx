import React, { FC, ReactNode, useState } from "react";
import { observer } from "mobx-react";

import { Button, Col, Divider, Row, Typography } from "antd";
import CommonGap from "../CommonGap";

const {Title} = Typography;

export type ICommonWrapComponentPropType = {
	title: string
	render?: (isEditing: boolean) => ReactNode

	handleEdit?: () => boolean
	needEdit?: boolean
}

const CommonWrapComponent: FC<ICommonWrapComponentPropType> = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const {title, children, handleEdit, needEdit = true, render} = props;

	const handleClickEdit = () => {
		if (handleEdit && isEditing && handleEdit()) {
			setIsEditing(false);
		}
		if (!isEditing) {
			setIsEditing(true);
		}
	};


	return <Row>
		<Col>
			<Row align="middle" justify="space-between" type="flex">
				<Title level={4} style={{margin: 0}}>{title}</Title>
				{
					needEdit && <Button type="link" onClick={handleClickEdit}>{isEditing ? "完成" : "编辑"}</Button>
				}
			</Row>
			<Divider style={{margin: "10px 0"}}/>
		</Col>
		<Col>
			{render ? render(isEditing) : children}
		</Col>
		<Col>
			<CommonGap size="xl"/>
		</Col>
	</Row>;
};
// 不加observer不会响应menuList的更改而更新，mobx的问题
export default observer(CommonWrapComponent);
