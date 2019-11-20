import React, { ChangeEvent } from "react";

import { Button, Icon } from "antd";

import "./style.scss";

export type IUploadFileComponentPropType = {
	label: string
	disabled?: boolean
}

export default class UploadFileComponent extends React.Component<IUploadFileComponentPropType> {
	handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.files);
	};

	render() {
		const {disabled = false} = this.props;
		return <section className="upload-file">
			<Button>
				<Icon type="upload"/> {this.props.label}
			</Button>
			<input type="file" onChange={this.handleChange} className="upload-file_input" disabled={disabled}/>
		</section>;
	}
}
