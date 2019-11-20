import React, { FC } from "react";

import { Icon } from "antd";

export type IFileShowComponentPropType = {
	type: "file" | "image"
	value: string
}

const FileShowComponent: FC<IFileShowComponentPropType> = (props) => {
	const {type, value} = props;
	let node = null;

	if (type === "file") {
		node = <>
			<Icon type="file-word"/>
			<span>
			{value}
		</span>
		</>;
	}

	if (type === "image") {
		node = <img src={value} alt=""/>;
	}

	return value ? <>
		{node}
		<Icon type="delete"/>
	</> : null;
};

export default FileShowComponent;
