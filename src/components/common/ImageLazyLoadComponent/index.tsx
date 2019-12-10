import React, { FC, ReactNode, useEffect } from 'react';

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

let observer: IntersectionObserver | null = null;

const ImageLazyLoadComponent: FC<ImageLazyLoadComponentPropType> = props => {
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
		observer = lazyLoad(id);
		return () => {
			// 卸载时释放IntersectionObserver
			observer?.disconnect();
			observer = null;
		};
	}, [id]);

	return (
		<ul className={listClassName} id={id}>
			{imageList.map((item, index) => (
				<li key={item.objectId} className={itemClassName}>
					{render({ item, index, observer })}
				</li>
			))}
			<li className={childClassName}>{children}</li>
		</ul>
	);
};

export default ImageLazyLoadComponent;
