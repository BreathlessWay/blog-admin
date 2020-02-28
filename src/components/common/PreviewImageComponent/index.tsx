import React from 'react';
import { render } from 'react-dom';

import PreviewImageComponent from './PreviewImageComponent';

import { close, keyDownListen } from './close';

const preview = {
	show({
		urls,
		maskClose = true,
		index = 0,
	}: {
		urls: Array<string>;
		maskClose?: boolean;
		index?: number;
	}) {
		if (urls && urls.length) {
			window.addEventListener('keydown', keyDownListen);
			const el = document.createElement('div');
			el.id = 'preview';
			document.body.append(el);
			render(
				<PreviewImageComponent
					imageUrls={urls}
					maskClose={maskClose}
					index={index}
				/>,
				el,
			);
		}
	},
	hide() {
		close();
	},
};

export default preview;
