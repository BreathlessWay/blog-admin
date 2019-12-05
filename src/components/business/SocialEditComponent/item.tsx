import React, { ChangeEvent, FC } from 'react';

import { Col, Input, Icon, Typography } from 'antd';
import UploadFileComponent from '@/components/common/UploadFileComponent';
import FileShowComponent from '@/components/common/FileShowComponent';
import Gap from '@/components/common/Gap';

const { Text } = Typography;

export type SocialEditItemPropType = {
	type: 'file' | 'image';
	isEditing: boolean;
	value: string;
	file: string;
	accept?: string;

	error?: boolean;
	errorMsg?: string;
	title?: string;
	label?: string;

	onUploadFile: (params: { fileUrl: string; fileName: string }) => void;
	onDeleteFile: () => void;
	onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;

	onDeleteItem?: () => void;
};

const SocialEditItem: FC<SocialEditItemPropType> = props => {
	const {
		isEditing,
		title,
		value,
		file,
		label = '',
		onUploadFile,
		onDeleteFile,
		onDeleteItem,
		onChangeInput,
		error = false,
		errorMsg,
		type,
		accept = '',
	} = props;
	return (
		<>
			<Col span={2}>
				{title ? (
					<label htmlFor={title}>{title}：</label>
				) : (
					<Icon type="delete" onClick={onDeleteItem} />
				)}
			</Col>
			<Col span={6}>
				<Input
					id={title}
					placeholder={type === 'file' ? '下载简历别名' : '社交链接'}
					allowClear={true}
					value={value}
					disabled={!isEditing}
					onChange={onChangeInput}
				/>
			</Col>
			<Col span={5} offset={1}>
				<UploadFileComponent
					accept={accept}
					label={label}
					disabled={!isEditing}
					onUploadFile={onUploadFile}
				/>
			</Col>
			<Col span={10}>
				<FileShowComponent type={type} value={file} onDelete={onDeleteFile} />
			</Col>
			<Col span={24}>{error && <Text type="danger">{errorMsg}</Text>}</Col>
			<Gap />
		</>
	);
};

export default SocialEditItem;
