import React, { FC } from 'react';

import { Icon } from 'antd';

import preview from '@/components/common/PreviewImageComponent';

import './style.scss';

export type FileShowComponentPropType = {
	type: 'file' | 'image';
	value: string;
	onDelete: () => void;
	isEditing: boolean;
};

const FileShowComponent: FC<FileShowComponentPropType> = props => {
	const { type, value, onDelete, isEditing } = props;
	let node = null;

	if (type === 'file') {
		node = (
			<>
				<span>{value}</span>
				&nbsp;
				{isEditing && <Icon type="delete" onClick={onDelete} />}
			</>
		);
	}

	if (type === 'image') {
		node = <img src={value} alt="icon" className="file-show_img" />;
	}

	const handlePreview = () => {
		if (value) {
			preview.show({ urls: [value] });
		}
	};

	return value ? (
		<>
			{node}
			&nbsp;
			{type === 'image' && <Icon type="eye" onClick={handlePreview} />}
		</>
	) : null;
};

export default FileShowComponent;
