import React, { Component, CSSProperties, MouseEvent } from 'react';

import { Result, Empty } from 'antd';

import Loading from '@/static/images/image-loading.svg';

import { SUPPORT_INTERSECTION_OBSERVER } from '@/utils/constant';

import './style.scss';

export type ImageLoadComponentPropType = {
	url: string;

	title?: string;
	width?: number | string;
	height?: number | string;

	onClick?: (params: { url: string; event: MouseEvent }) => void;
};

export type ImageLoadComponentStateType = Readonly<{
	src: string;
	error: boolean;
	loading: boolean;
}>;

export default class ImageLoadComponent extends Component<
	ImageLoadComponentPropType,
	ImageLoadComponentStateType
> {
	static getDerivedStateFromProps(
		props: ImageLoadComponentPropType,
		state: ImageLoadComponentStateType,
	): ImageLoadComponentStateType | null {
		if (props.url !== state.src) {
			return {
				src: props.url,
				error: false,
				loading: true,
			};
		}
		return state;
	}

	readonly state: ImageLoadComponentStateType = {
		src: this.props.url,
		error: false,
		loading: true,
	};

	get showLoading() {
		const { url } = this.props;
		const { error, loading } = this.state;
		return url && loading && !error && !SUPPORT_INTERSECTION_OBSERVER;
	}

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
		event.stopPropagation();
		const { url, onClick } = this.props;
		onClick && onClick({ url, event });
	};

	renderContent = () => {
		const { title = '' } = this.props;

		const { error, loading, src } = this.state;

		const imageStyle = { display: loading ? 'none' : 'block' };

		switch (true) {
			case SUPPORT_INTERSECTION_OBSERVER: {
				return (
					<div onClick={event => event.stopPropagation()}>
						<Result
							className="image-load_error"
							status="error"
							title="系统错误"
							subTitle="您的浏览器不支持IntersectionObserver方法，无法正常访问图片,请更换浏览器！"
						/>
					</div>
				);
			}
			case error: {
				return (
					<div onClick={event => event.stopPropagation()}>
						<Result
							className="image-load_error"
							status="error"
							title="图片加载失败"
						/>
					</div>
				);
			}
			case Boolean(src): {
				return (
					<img
						className="image-load_img"
						style={imageStyle}
						src={src}
						alt={title}
						onLoad={this.handleLoad}
						onError={this.handleError}
						onClick={this.handleClick}
					/>
				);
			}
			default:
				return (
					<div onClick={event => event.stopPropagation()}>
						<Empty description="暂无图片" className="image-load_empty" />
					</div>
				);
		}
	};

	render() {
		const { width = 0, height = 0 } = this.props;
		const backgroundStyle: CSSProperties = this.showLoading
			? {
					backgroundImage: `url("${Loading}")`,
			  }
			: {};

		if (width) {
			backgroundStyle.width = width;
		}

		if (height) {
			backgroundStyle.height = height;
		}

		return (
			<article className="image-load_wrap" style={backgroundStyle}>
				{this.renderContent()}
			</article>
		);
	}
}
