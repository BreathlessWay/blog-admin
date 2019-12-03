import React, { FC, ReactNode } from 'react';

import { Col, Row } from 'antd';

import './style.scss';

export type IImageCardComponentPropType = {
	url: string;
	title?: string;
	intro?: string;
	actions?: Array<ReactNode>;
	width?: number;
	height?: number;
};

const ImageCardComponent: FC<IImageCardComponentPropType> = props => {
	const { url, actions, title, intro, width = 180, height = 180 } = props;
	let span = 24;
	if (actions && actions.length) {
		span = 24 / actions.length;
	}
	return (
		<article style={{ width }}>
			<section
				className="image-card_picture"
				style={{ backgroundImage: `url("${url}")`, height }}
			/>
			<section className="image-card_info">
				{title && <h5 className="image-card_title">{title}</h5>}
				{intro && <p className="image-card_intro">{intro}</p>}
			</section>
			{actions && (
				<Row
					type="flex"
					align="middle"
					justify="center"
					className="image-card_bottom">
					{actions.map((item, index) => (
						<Col span={span} className="image-card_action" key={index}>
							{item}
						</Col>
					))}
				</Row>
			)}
		</article>
	);
};

export default ImageCardComponent;
