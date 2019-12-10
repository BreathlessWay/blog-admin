import React, { Component, createRef, CSSProperties, MouseEvent } from 'react';

import { Result, Empty } from 'antd';

import Loading from '@/static/images/image-loading.svg';

import {
	IMAGE_DATA_SRC,
	SUPPORT_INTERSECTION_OBSERVER,
} from '@/utils/constant';

import './style.scss';

export type ImageLoadComponentPropType = {
	url: string;

	title?: string;
	empty?: string;
	width?: number | string;
	height?: number | string;
	observer?: IntersectionObserver | null;

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
	wrap = createRef<HTMLElement>();

	componentDidMount(): void {
		this.showImage();
	}

	componentDidUpdate(prevProps: Readonly<ImageLoadComponentPropType>): void {
		if (this.state.src !== this.props.url) {
			this.setState(
				{
					src: this.props.url,
					error: false,
					loading: true,
				},
				() => {
					this.showImage();
				},
			);
		}
	}

	showImage = () => {
		if (this.wrap.current) {
			const { observer } = this.props;
			if (observer) {
				observer.unobserve(this.wrap.current);
				observer.observe(this.wrap.current);
			} else {
				const oImg = this.wrap.current.getElementsByTagName('img')[0];
				if (oImg) {
					oImg.src = oImg.getAttribute(IMAGE_DATA_SRC) || '';
				}
			}
		}
	};

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
		const { url, onClick } = this.props;
		onClick && onClick({ url, event });
	};

	renderContent = () => {
		const { title = '', empty = '暂无图片' } = this.props;

		const { error, loading, src } = this.state;

		const imageStyle = !loading ? { display: 'block' } : {};

		switch (true) {
			case SUPPORT_INTERSECTION_OBSERVER: {
				return (
					<div>
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
					<div>
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
						data-src={src}
						alt={title}
						onLoad={this.handleLoad}
						onError={this.handleError}
					/>
				);
			}
			default:
				return (
					<div>
						<Empty description={empty} className="image-load_empty" />
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
			<article
				ref={this.wrap}
				className="image-load_wrap"
				style={backgroundStyle}
				onClick={this.handleClick}>
				{this.renderContent()}
			</article>
		);
	}
}
