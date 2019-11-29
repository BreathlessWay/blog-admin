import React, { Component, ErrorInfo, GetDerivedStateFromError } from 'react';

import { Alert } from 'antd';

export type IErrorBoundaryComponentPropType = {};

export type IErrorBoundaryComponentStateType = {
	hasError: boolean;
};

export default class ErrorBoundaryComponent extends Component<
	IErrorBoundaryComponentPropType,
	IErrorBoundaryComponentStateType
> {
	state = { hasError: false };

	static getDerivedStateFromError(
		error: GetDerivedStateFromError<
			IErrorBoundaryComponentPropType,
			IErrorBoundaryComponentStateType
		>,
	) {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { hasError: true };
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
