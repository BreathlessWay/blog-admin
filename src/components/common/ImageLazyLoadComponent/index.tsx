import React, { FC, ReactNode, useEffect, useState } from 'react';

import { ImageItemType, ImageListType } from '@/types/image';

import { lazyLoad } from '@/utils/intersectionObserver';

export type ImageLazyLoadComponentRenderImageListPropType = {
	imageList: ImageListType;
	render: (params: {
		item: ImageItemType;
		index: number;
		observer: IntersectionObserver | null;
	}) => ReactNode;
};

export type ImageLazyLoadComponentPropType = {
	id?: string;
	listClassName?: string;
	itemClassName?: string;
	childClassName?: string;
} & ImageLazyLoadComponentRenderImageListPropType;

const ImageLazyLoadComponent: FC<ImageLazyLoadComponentPropType> = props => {
	const [observer, setObserver] = useState<IntersectionObserver | null>(null);

	const {
		id,
		imageList,
		render,
		children,
		listClassName,
		itemClassName,
		childClassName,
	} = props;

	useEffect(() => {
		setObserver(lazyLoad(id));
		return () => {
			// 卸载时释放IntersectionObserver
			setObserver(null);
		};
	}, [id]);

	return (
		<ul className={listClassName}>
			{observer &&
				imageList.map((item, index) => (
					<li key={item._id} className={itemClassName}>
						{render({ item, index, observer })}
					</li>
				))}
			<li className={childClassName}>{children}</li>
		</ul>
	);
};

export default ImageLazyLoadComponent;
