import React, { FC, useState, MouseEvent } from 'react';

import { Icon } from 'antd';

import { close } from './close';

import './style.scss';
import ImageLazyLoadComponent from '@/components/common/ImageLazyLoadComponent';

export type IPreviewImageComponentPropType = {
	imageUrls: Array<string>;
	maskClose: boolean;
	index: number;
};

export enum EOperate {
	add = 'add',
	minus = 'minus',
}

const PreviewImageComponent: FC<IPreviewImageComponentPropType> = props => {
	const { imageUrls, maskClose, index } = props;

	const [current, setCurrent] = useState(index);

	const imageLength = imageUrls.length;

	const hasMoreImage = imageLength > 1;

	const image = imageUrls[current];

	const showLeft = hasMoreImage && current > 0;

	const showRight = hasMoreImage && current < imageLength - 1;

	const changeCurrent = (e: MouseEvent, operate: EOperate) => {
		e.stopPropagation();
		switch (operate) {
			case EOperate.add:
				setCurrent(current + 1);
				break;
			case EOperate.minus:
				setCurrent(current - 1);
				break;
		}
	};

	return (
		<article className="preview-image" onClick={maskClose ? close : () => {}}>
			<section className="preview-image_wrap">
				{showLeft && (
					<Icon
						type="left-circle"
						className="preview-image_left"
						onClick={e => changeCurrent(e, EOperate.minus)}
					/>
				)}
				<ImageLazyLoadComponent
					url={image}
					onClick={({ event }) => event.stopPropagation()}
				/>
				{showRight && (
					<Icon
						type="right-circle"
						className="preview-image_right"
						onClick={e => changeCurrent(e, EOperate.add)}
					/>
				)}
			</section>
		</article>
	);
};

export default PreviewImageComponent;
