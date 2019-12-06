import React, { Component, createRef } from 'react';

import ImageLoadComponent, {
	ImageLoadComponentPropType,
} from '@/components/common/ImageLoadComponent';

export type ImageLazyLoadComponentPropType = ImageLoadComponentPropType;

export type ImageLazyLoadComponentStateType = Readonly<{
	show: boolean;
}>;

export default class ImageLazyLoadComponent extends Component<
	ImageLazyLoadComponentPropType,
	ImageLazyLoadComponentStateType
> {
	observer = new IntersectionObserver(
		entries => {
			entries.forEach(item => {
				// 当前元素可见
				if (item.isIntersecting) {
					this.handleShowItem();
					this.observer.unobserve(item.target); // 停止观察当前元素 避免不可见时候再次调用callback函数
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

	wrap = createRef<HTMLElement>();

	readonly state: ImageLazyLoadComponentStateType = {
		show: false,
	};

	componentDidMount(): void {
		this.wrap.current && this.observer.observe(this.wrap.current);
	}

	handleShowItem = () => {
		this.setState({
			show: true,
		});
	};

	render() {
		const { show } = this.state;
		return (
			<section ref={this.wrap}>
				{show && <ImageLoadComponent {...this.props} />}
			</section>
		);
	}
}
