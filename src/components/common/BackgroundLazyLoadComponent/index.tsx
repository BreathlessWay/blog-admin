import React, { Component } from 'react';

import BackgroundLoading from '@/static/images/background-loading.svg';

import './style.scss';

export type BackgroundLazyLoadComponentPropType = {
	url: string;
	width: number | string;
	height: number;
};

export type BackgroundLazyLoadComponentStateType = Readonly<{
	error: boolean;
	loading: boolean;
}>;

export default class BackgroundLazyLoadComponent extends Component<
	BackgroundLazyLoadComponentPropType,
	BackgroundLazyLoadComponentStateType
> {
	readonly state: BackgroundLazyLoadComponentStateType = {
		error: false,
		loading: true,
	};

	render() {
		const { url, height, width } = this.props;
		return (
			<section
				className="background-lazy"
				style={{
					width,
					height,
					backgroundImage: `url("${BackgroundLoading}")`,
					backgroundSize: 'auto',
				}}
			/>
		);
	}
}
