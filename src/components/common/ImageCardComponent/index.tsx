import React, { FC, ReactNode } from 'react';

import { Col, Row } from 'antd';

import './style.scss';

export type IImageCardComponentPropType = {
	url: string;

	actions?: Array<ReactNode>;
};

const ImageCardComponent: FC<IImageCardComponentPropType> = props => {
	const { url, actions } = props;
	let span = 24;
	if (actions && actions.length) {
		span = 24 / actions.length;
	}
	return (
		<>
			<section
				className="image-card_picture"
				style={{ backgroundImage: `url("${url}")` }}
			/>
			{actions && (
				<Row type="flex" align="middle" justify="center">
					{actions.map((item, index) => (
						<Col span={span} className="image-card_action" key={index}>
							{item}
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default ImageCardComponent;
