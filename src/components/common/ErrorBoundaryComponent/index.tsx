import React, { Component, ErrorInfo, GetDerivedStateFromError } from 'react';

import { Alert, Modal } from 'antd';

import { SUPPORT_INTERSECTION_OBSERVER } from '@/utils/constant';

const { error } = Modal;

export type ErrorBoundaryComponentPropType = {};

export type ErrorBoundaryComponentStateType = {
	hasError: boolean;
};

export default class ErrorBoundaryComponent extends Component<
	ErrorBoundaryComponentPropType,
	ErrorBoundaryComponentStateType
> {
	state = { hasError: false };

	static getDerivedStateFromError(
		error: GetDerivedStateFromError<
			ErrorBoundaryComponentPropType,
			ErrorBoundaryComponentStateType
		>,
	) {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { hasError: true };
	}

	componentDidMount(): void {
		if (SUPPORT_INTERSECTION_OBSERVER) {
			error({
				title: '警告',
				content:
					'您的浏览器不支持IntersectionObserver方法，会导致网址无法正常运行,请更换浏览器！',
			});
		}
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// 你同样可以将错误日志上报给服务器
		console.error({ error, errorInfo });
	}

	render() {
		if (this.state.hasError) {
			// 你可以自定义降级后的 UI 并渲染
			return <Alert message="系统发生异常，请联系管理人员" type="error" />;
		}
		return this.props.children;
	}
}
