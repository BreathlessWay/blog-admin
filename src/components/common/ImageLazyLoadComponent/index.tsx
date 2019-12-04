import React, { Component, MouseEvent } from 'react';

import { Row, Spin, Result, Empty } from 'antd';

import './style.scss';

export type IImageLazyLoadComponentPropType = {
	url: string;

	title?: string;
	width?: number;
	height?: number;

	onClick?: (params: { url: string; event: MouseEvent }) => void;
};

export type IImageLazyLoadComponentStateType = Readonly<{
	error: boolean;
	loading: boolean;
}>;

export default class ImageLazyLoadComponent extends Component<
	IImageLazyLoadComponentPropType,
	IImageLazyLoadComponentStateType
> {
	readonly state: IImageLazyLoadComponentStateType = {
		error: false,
		loading: true,
	};

	handleLoad = () => {
		this.setState({
			error: false,
			loading: false,
		});
	};

	handleError = () => {
		this.setState({
			error: true,
			loading: false,
		});
	};

	handleClick = (event: MouseEvent) => {
		const { url, onClick } = this.props;
		onClick && onClick({ url, event });
	};

	render() {
		const { url, width = 0, height = 0, title = '' } = this.props;
		const { error, loading } = this.state;
		const _style: any = { display: loading ? 'none' : 'block' };
		if (width) {
			_style.width = width;
		}

		if (height) {
			_style.height = height;
		}

		return (
			<Row type="flex" align="middle">
				{error && (
					<Result
						className="image-load_error"
						status="error"
						title="图片加载失败"
					/>
				)}
				{loading && url && <Spin size="large" />}
				{url ? (
					<img
						style={_style}
						src={url}
						alt={title}
						onLoad={this.handleLoad}
						onError={this.handleError}
						onClick={this.handleClick}
					/>
				) : (
					<Empty description="暂无图片" className="image-load_empty" />
				)}
			</Row>
		);
	}
}
