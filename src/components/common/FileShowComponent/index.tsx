import React, { FC } from "react";

import { Icon } from "antd";

import preview from "../PreviewImageComponent";

import "./style.scss";

export type IFileShowComponentPropType = {
	type: "file" | "image",
	value: string,
	onDelete: () => void
}

const FileShowComponent: FC<IFileShowComponentPropType> = (props) => {
	const {type, value, onDelete} = props;
	let node = null;

	if (type === "file") {
		node = <>
			<span>{value}</span>
		</>;
	}

	if (type === "image") {
		node = <img src={value} alt="icon" className="file-show_img"/>;
	}

	const handlePreview = () => {
		preview.show(value);
	};

	return value ? <>
		{node}
		&nbsp;
		<Icon type="delete" onClick={onDelete}/>
		&nbsp;
		<Icon type="eye" onClick={handlePreview}/>
	</> : null;
};

export default FileShowComponent;
