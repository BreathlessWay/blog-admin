import React, { ChangeEvent, FC } from 'react';

import { Col, Input, Icon, Typography } from 'antd';
import UploadFileComponent from '@/components/common/UploadFileComponent';
import FileShowComponent from '@/components/common/FileShowComponent';
import Gap from '@/components/common/Gap';

const { Text } = Typography;

export type ISocialEditItemPropType = {
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

const SocialEditItem: FC<ISocialEditItemPropType> = props => {
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
				{title || <Icon type="delete" onClick={onDeleteItem} />}
			</Col>
			<Col span={6}>
				<Input
					allowClear={true}
					value={value}
					maxLength={13}
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
