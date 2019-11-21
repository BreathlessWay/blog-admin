import React, { FC } from "react";
import { Button, Col, Divider, Row, Typography } from "antd";
import CommonGap from "../CommonGap";

const {Title} = Typography;

export type ICommonWrapComponentPropType = {
	title: string
	handleEdit: () => void
	isEditing: boolean
}

const CommonWrapComponent: FC<ICommonWrapComponentPropType> = (props) => {
	return <Row>
		<Col>
			<Row align="middle" justify="space-between" type="flex">
				<Title level={4} style={{margin: 0}}>{props.title}</Title>
				<Button type="link" onClick={props.handleEdit}>{props.isEditing ? "完成" : "编辑"}</Button>
			</Row>
			<Divider style={{margin: "10px 0"}}/>
		</Col>
		<Col>
			{props.children}
		</Col>
		<Col>
			<CommonGap size="xl"/>
		</Col>
	</Row>;
};

export default CommonWrapComponent;
