import React, { FormEvent } from 'react';

import { inject, observer } from 'mobx-react';

import { Row, Form, Icon, Input, Button, Col, Modal } from 'antd';

import { RouteComponentProps } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form';
import { StoreType } from '@/store/store';

import { getCode, login, register } from '@/apis/user';

import { loginService } from '@/service/loginService';

import { TIME_COUNT_DOWN } from '@/utils/constant';

import './style.scss';

const { confirm } = Modal;

export type LoginPagePropType = Pick<StoreType, 'userStore' | 'homepageStore'> &
	RouteComponentProps &
	FormComponentProps;

export type LoginPageStateType = Readonly<{
	second: number;
	loading: boolean;
	disabled: boolean;
}>;

@inject((allStore: StoreType) => ({
	userStore: allStore.userStore,
	homepageStore: allStore.homepageStore,
}))
@observer
class LoginPage extends React.Component<LoginPagePropType, LoginPageStateType> {
	time: any = null;

	readonly state: LoginPageStateType = {
		second: TIME_COUNT_DOWN,
		loading: false,
		disabled: false,
	};

	componentDidMount(): void {
		const { userStore, history, homepageStore } = this.props;
		loginService({ userStore, history, homepageStore, isLoginPage: true });
	}

	handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				const { userStore, history, homepageStore } = this.props;
				try {
					const res = await login(values);
					console.log(res);
					// login({
					// 	userStore,
					// 	history,
					// 	homepageStore,
					// 	isLoginPage: true,
					// 	token: 'login',
					// });
				} catch (e) {}
			}
		});
	};

	handleGetCode = async () => {
		const _this = this;

		try {
			// 获取邮箱输入框
			const email = _this.props.form.getFieldValue('email');
			// 邮箱正则
			const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			if (emailReg.test(email)) {
				_this.setState({
					loading: true,
				});
				// 获取验证码
				const res = await getCode({ email });
				if (res.data.success) {
					_this.handleGetCodeTime();
				} else {
					confirm({
						title: '提示',
						content: '该邮箱尚未注册，是否注册？',
						okText: '注册',
						cancelText: '不注册',
						onOk() {
							// 注册流程
							_this.handleRegister({ email });
						},
						onCancel() {
							_this.setState({
								loading: false,
							});
						},
					});
				}
				return;
			}
			_this.props.form.setFields({
				email: {
					value: '',
					errors: [new Error('请输入邮箱账号')],
				},
			});
		} catch (e) {
			_this.setState({
				loading: false,
			});
		}
	};

	handleRegister = async ({ email }: { email: string }) => {
		try {
			const res = await register({ email });
			if (res.data.success) {
				this.handleGetCodeTime();
			}
		} catch (e) {
			this.setState({
				loading: false,
			});
		}
	};

	handleGetCodeTime = () => {
		this.setState({
			loading: false,
			disabled: true,
		});
		this.time = setInterval(() => {
			const { second } = this.state;
			if (second) {
				this.setState({
					second: second - 1,
				});
			} else {
				window.clearInterval(this.time);
				this.setState({
					disabled: false,
					second: TIME_COUNT_DOWN,
				});
			}
		}, 1000);
	};

	get label() {
		const { second, disabled } = this.state;
		if (disabled) {
			return `${second}s后重新获取`;
		}
		return '获取验证码';
	}

	componentWillUnmount(): void {
		window.clearInterval(this.time);
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { loading, disabled } = this.state;
		const { label } = this;

		return (
			<Row align="middle" justify="center" type="flex" className="login-page">
				<Col>
					<Form onSubmit={this.handleSubmit} className="login-page_form">
						<Form.Item>
							{getFieldDecorator('email', {
								rules: [{ required: true, message: '请输入邮箱账号!' }],
							})(
								<Input
									prefix={<Icon type="mail" className="login-page_icon" />}
									placeholder="电子邮箱"
								/>,
							)}
						</Form.Item>
						<Form.Item>
							<Row gutter={8}>
								<Col span={14}>
									{getFieldDecorator('code', {
										rules: [{ required: true, message: '请输入验证码!' }],
									})(
										<Input
											prefix={<Icon type="lock" className="login-page_icon" />}
											placeholder="验证码"
										/>,
									)}
								</Col>
								<Col span={10}>
									<Button
										block={true}
										onClick={this.handleGetCode}
										loading={loading}
										disabled={disabled}>
										{label}
									</Button>
								</Col>
							</Row>
						</Form.Item>
						<Form.Item>
							<Button type="default" htmlType="submit" block={true}>
								登陆
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		);
	}
}

const WrappedLoginPage = Form.create({ name: 'normal_login' })(LoginPage);

export default WrappedLoginPage;
