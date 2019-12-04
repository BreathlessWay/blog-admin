import React, { FC } from 'react';

export type ICommonGapPropType = {
	size?: 'sm' | 'md' | 'lg' | 'xl';
};

const Gap: FC<ICommonGapPropType> = props => {
	let height = 0;

	switch (props.size) {
		case 'sm':
			height = 8;
			break;
		case 'md':
			height = 12;
			break;
		case 'lg':
			height = 16;
			break;
		case 'xl':
			height = 24;
			break;
		default:
			height = 8;
	}

	return <aside style={{ height, width: '100%', clear: 'both' }} />;
};

export default Gap;
