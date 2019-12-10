import React, { FC, createRef, useState, useEffect } from 'react';

import ImageLoadComponent, {
	ImageLoadComponentPropType,
} from '@/components/common/ImageLoadComponent';

import { lazyLoad } from '@/utils/intersectionObserver';

export type ImageLazyLoadComponentPropType = ImageLoadComponentPropType & {
	id?: string;
};

const changeShow = (func: Function) => {
	console.log(func);
	return func(true);
};

const observer = lazyLoad({ callback: changeShow });

const ImageLazyLoadComponent: FC<ImageLazyLoadComponentPropType> = props => {
	const [show, setShow] = useState(false);

	const wrap = createRef<HTMLElement>();

	useEffect(() => {
		changeShow(setShow);
		wrap.current && observer.observe(wrap.current);
	}, [wrap]);

	return (
		<section ref={wrap}>{show && <ImageLoadComponent {...props} />}</section>
	);
};

export default ImageLazyLoadComponent;
