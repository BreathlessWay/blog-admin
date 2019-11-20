import React, { FormEvent } from "react";
import { inject, observer } from "mobx-react";
import { Row, Form, Icon, Input, Button, Checkbox, Col } from "antd";

import { StoreType } from "@/store/store";
import { RouteComponentProps } from "react-router-dom";
import { FormComponentProps } from "antd/lib/form";

export type ILoginPagePropType = StoreType & RouteComponentProps & FormComponentProps

@inject("userStore")
@observer
class LoginPage extends React.Component<ILoginPagePropType> {
	handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
			}
		});
	};

	render() {
		const {getFieldDecorator} = this.props.form;

		return <Row align="middle" justify="center" type="flex" style={{height: "100%"}}>
			<Col>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<Form.Item>
						{getFieldDecorator("username", {
							rules: [{required: true, message: "Please input your username!"}]
						})(
							<Input
								prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
								placeholder="Username"
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator("password", {
							rules: [{required: true, message: "Please input your Password!"}]
						})(
							<Input
								prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
								type="password"
								placeholder="Password"
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator("remember", {
							valuePropName: "checked",
							initialValue: true
						})(<Checkbox>Remember me</Checkbox>)}
						<a className="login-form-forgot" href="">
							Forgot password
						</a>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
						Or <a href="">register now!</a>
					</Form.Item>
				</Form>
			</Col>
		</Row>;
	}
}

const WrappedLoginPage = Form.create({name: "normal_login"})(LoginPage);

export default WrappedLoginPage;
