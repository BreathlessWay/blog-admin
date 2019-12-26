import React, { FormEvent } from 'react';

import { inject, observer } from 'mobx-react';

import { Row, Form, Icon, Input, Button, Col, Modal, notification } from 'antd';

import { RouteComponentProps } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form';
import { StoreType } from '@/store/store';

import { getCode, login, register } from '@/apis/user';

import { loginService } from '@/service/loginService';

import { EMAIL_REG, MAX_LENGTH_XS, TIME_COUNT_DOWN } from '@/utils/constant';

import './style.scss';

const { confirm } = Modal;

export type LoginPagePropType = Pick<StoreType, 'userStore' | 'homepageStore'> &
	RouteComponentProps &
	FormComponentProps;

export type LoginPageStateType = Readonly<{
	second: number;
	codeLoading: boolean;
	codeDisabled: boolean;
	submitLoading: boolean;
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
		codeLoading: false,
		codeDisabled: false,
		submitLoading: false,
	};

	async componentDidMount() {
		const { history } = this.props;
		await loginService({
			history,
			isLoginPage: true,
		});
	}

	handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		this.props.form.validateFields(async (err, values) => {
			if (!err) {
				this.setState({
					submitLoading: true,
				});
				const { history } = this.props;
				try {
					const res = await login(values);
					if (res.data.success) {
						notification['success']({
							message: '登录成功',
						});
						await loginService({
							history,
							isLoginPage: true,
							token: res.data.data.token,
						});
					} else {
						throw new Error(res.data.msg);
					}
				} catch (e) {
					notification['error']({
						message: '登录失败',
						description: e.message,
					});
					this.setState({
						submitLoading: false,
					});
				}
			}
		});
	};

	handleGetCode = async () => {
		const _this = this;

		try {
			// 获取邮箱输入框
			const email = _this.props.form.getFieldValue('email');
			if (EMAIL_REG.test(email)) {
				_this.setState({
					codeLoading: true,
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
								codeLoading: false,
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
				codeLoading: false,
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
				codeLoading: false,
			});
		}
	};

	handleGetCodeTime = () => {
		this.setState({
			codeLoading: false,
			codeDisabled: true,
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
					codeDisabled: false,
					second: TIME_COUNT_DOWN,
				});
			}
		}, 1000);
	};

	get label() {
		const { second, codeDisabled } = this.state;
		if (codeDisabled) {
			return `${second}s后重新获取`;
		}
		return '获取验证码';
	}

	componentWillUnmount(): void {
		window.clearInterval(this.time);
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { codeLoading, codeDisabled, submitLoading } = this.state;
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
											maxLength={MAX_LENGTH_XS}
											placeholder="验证码"
										/>,
									)}
								</Col>
								<Col span={10}>
									<Button
										block={true}
										onClick={this.handleGetCode}
										loading={codeLoading}
										disabled={codeDisabled}>
										{label}
									</Button>
								</Col>
							</Row>
						</Form.Item>
						<Form.Item>
							<Button
								type="default"
								htmlType="submit"
								block={true}
								loading={submitLoading}
								disabled={submitLoading}>
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
