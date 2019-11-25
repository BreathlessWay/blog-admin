import React, { Component } from 'react';

import { ColorResult, SketchPicker } from 'react-color';
import { Popover, Button, Row, Col } from 'antd';

import './style.scss';

export type IColorPickerComponentPropType = {
	color: string;

	disabled?: boolean;

	onConfirm: (color: string) => void;
	onCancel?: () => void;
};

export type IColorPickerComponentStateType = Readonly<{
	value: string;
	visible: boolean;
}>;

export default class ColorPickerComponent extends Component<
	IColorPickerComponentPropType,
	IColorPickerComponentStateType
> {
	readonly state = {
		value: this.props.color,
		visible: false,
	};

	static getDerivedStateFromProps(
		props: IColorPickerComponentPropType,
		state: IColorPickerComponentStateType,
	) {
		if (!state.visible) {
			return {
				value: props.color,
				visible: false,
			};
		}
		return null;
	}

	handleChangeComplete = (color: ColorResult) => {
		this.setState({
			value: color.hex,
		});
	};

	handleClick = () => {
		if (this.props.disabled) {
			return;
		}
		this.setState({
			visible: true,
		});
	};

	handleClickCancel = () => {
		const { color, onCancel } = this.props;
		this.setState({
			visible: false,
			value: color,
		});
		onCancel && onCancel();
	};

	handleClickConfirm = () => {
		this.setState({
			visible: false,
		});
		this.props.onConfirm(this.state.value);
	};

	render() {
		const { disabled } = this.props;
		const { value, visible } = this.state;
		return (
			<Popover
				content={
					<Row>
						<Col>
							<SketchPicker
								disableAlpha={true}
								width={'210px'}
								color={value}
								onChangeComplete={this.handleChangeComplete}
							/>
						</Col>
						<Col className="color-pick_btn">
							<span
								className="color-pick-btn_cancel"
								onClick={this.handleClickCancel}>
								取消
							</span>
							<Button type="link" onClick={this.handleClickConfirm}>
								确定
							</Button>
						</Col>
					</Row>
				}
				trigger="click"
				overlayClassName="color-pick"
				visible={visible}>
				<Button
					style={{ background: value }}
					onClick={this.handleClick}
					disabled={disabled}
				/>
			</Popover>
		);
	}
}
