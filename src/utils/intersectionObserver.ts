import { IMAGE_DATA_SRC } from '@/utils/constant';

export const lazyLoad = (id?: string) => {
	let root = null;

	if (id) {
		root = document.getElementById(id);
	}
	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(item => {
				// 当前元素可见
				if (item.isIntersecting) {
					const oImage = item.target.getElementsByTagName('img')[0];
					if (oImage) {
						oImage.src = oImage.getAttribute(IMAGE_DATA_SRC) || '';
					}
					observer.unobserve(item.target); // 停止观察当前元素 避免不可见时候再次调用callback函数
				}
			});
		},
		{
			root, // 用于观察的根元素，默认是浏览器的视口，也可以指定具体元素，指定元素的时候用于观察的元素必须是指定元素的子元素
			//  [0, 0.5, 1],当观察元素0%、50%、100%时候就会触发回调函数
			threshold: [0], // 用来指定交叉比例，决定什么时候触发回调函数，是一个数组，默认是[0]
			rootMargin: '0px 0px 0px 0px', //计算交叉时添加到根(root)边界盒bounding box的矩形偏移量
		},
	);

	return observer;
};
