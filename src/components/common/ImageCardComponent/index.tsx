import React, { FC, ReactNode } from 'react';

import { Col, Row } from 'antd';
import ImageLoadComponent from '@/components/common/ImageLoadComponent';

import './style.scss';

export type ImageCardComponentPropType = {
	url: string;

	showInfo?: boolean;
	title?: string;
	intro?: string;
	actions?: Array<ReactNode>;
	width?: number | string;
	height?: number | string;
	observer?: IntersectionObserver;

	onClick?: () => void;
};

const ImageCardComponent: FC<ImageCardComponentPropType> = props => {
	const {
		url,
		actions,
		title,
		intro,
		width = 180,
		height = 180,
		onClick,
		showInfo = false,
		observer,
	} = props;
	let span = 24;

	if (actions && actions.length) {
		span = 24 / actions.length;
	}

	return (
		<article style={{ width }} onClick={() => onClick && onClick()}>
			<section className="image-card_image">
				<ImageLoadComponent url={url} height={height} observer={observer} />
			</section>
			{showInfo && (
				<section className="image-card_info">
					<h5 className="image-card_title">{title}</h5>
					<aside className="image-card_intro">
						<p className="image-card_intro__content">{intro}</p>
					</aside>
				</section>
			)}

			{actions && (
				<Row
					type="flex"
					align="middle"
					justify="center"
					className="image-card_bottom"
					onClick={event => event.stopPropagation()}>
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
