import React, { Component, createRef, MouseEvent } from 'react';

import { Result, Empty } from 'antd';

import Loading from '@/static/images/image-loading.svg';

import { SUPPORT_INTERSECTION_OBSERVER } from '@/utils/constant';

import './style.scss';

export type ImageLazyLoadComponentPropType = {
	url: string;

	title?: string;
	width?: number | string;
	height?: number | string;

	onClick?: (params: { url: string; event: MouseEvent }) => void;
};

export type ImageLazyLoadComponentStateType = Readonly<{
	error: boolean;
	loading: boolean;
}>;

export default class ImageLazyLoadComponent extends Component<
	ImageLazyLoadComponentPropType,
	ImageLazyLoadComponentStateType
> {
	wrap = createRef<HTMLElement>();

	image = createRef<HTMLImageElement>();

	readonly state: ImageLazyLoadComponentStateType = {
		error: false,
		loading: true,
	};

	componentDidMount(): void {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(item => {
					console.log(item.isIntersecting);
					if (item.isIntersecting && this.image.current) {
						const src = this.image.current.getAttribute('data-src') || '';
						this.image.current.setAttribute('src', src);
						// 当前元素可见
						observer.unobserve(item.target); // 停止观察当前元素 避免不可见时候再次调用callback函数
					}
				});
			},
			{
				root: null, // 用于观察的根元素，默认是浏览器的视口，也可以指定具体元素，指定元素的时候用于观察的元素必须是指定元素的子元素
				//  [0, 0.5, 1],当观察元素img0%、50%、100%时候就会触发回调函数
				threshold: [0], // 用来指定交叉比例，决定什么时候触发回调函数，是一个数组，默认是[0]
				rootMargin: '0px 0px 0px 0px', //计算交叉时添加到根(root)边界盒bounding box的矩形偏移量
			},
		);

		this.wrap.current && observer.observe(this.wrap.current);
	}

	shouldComponentUpdate(
		nextProps: Readonly<ImageLazyLoadComponentPropType>,
		nextState: Readonly<ImageLazyLoadComponentStateType>,
		nextContext: any,
	): boolean {
		return (
			this.props.url !== nextProps.url ||
			this.state.error !== nextState.error ||
			this.state.loading !== nextState.loading
		);
	}

	componentDidUpdate(
		prevProps: Readonly<ImageLazyLoadComponentPropType>,
	): void {
		if (prevProps.url !== this.props.url) {
			this.setState({
				error: false,
				loading: true,
			});
		}
	}

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
		const { url, title = '' } = this.props;

		const { error, loading } = this.state;

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
			case Boolean(url): {
				return (
					<img
						ref={this.image}
						className="image-load_img"
						style={imageStyle}
						data-src={url}
						alt={title}
						// src={url}
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
		const backgroundStyle: any = this.showLoading
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
				style={backgroundStyle}>
				{this.renderContent()}
			</article>
		);
	}
}
