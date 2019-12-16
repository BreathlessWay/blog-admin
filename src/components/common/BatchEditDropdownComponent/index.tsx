import React, { FC } from 'react';

import { Dropdown, Menu, Button, Icon, Modal } from 'antd';

const { Item } = Menu;
const { confirm } = Modal;

export type BatchEditDropdownComponentPropType = {
	isEmpty: boolean;
	isAllListChecked: boolean;
	tips: string;
	hasChecked: boolean;

	onBatchSelect: () => void;
	onBatchHide: () => void;
	onBatchShow: () => void;
	onBatchDelete: () => void;
};

const BatchEditDropdownComponent: FC<BatchEditDropdownComponentPropType> = props => {
	const {
		isEmpty,
		children,
		isAllListChecked,
		onBatchSelect,
		onBatchHide,
		onBatchShow,
		onBatchDelete,
		tips,
		hasChecked,
	} = props;

	const handleBatchDelete = () => {
		confirm({
			title: tips,
			okType: 'danger',
			onOk() {
				onBatchDelete();
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	};

	const menu = (
		<Menu>
			<Menu.Item>{children}</Menu.Item>
			{!isEmpty && (
				<Menu.Item>
					<Button type="link" onClick={onBatchSelect}>
						{isAllListChecked ? '取消全选' : '全选'}
					</Button>
				</Menu.Item>
			)}
			{!isEmpty && hasChecked && (
				<Item>
					<Button type="link" onClick={onBatchHide}>
						批量隐藏
					</Button>
				</Item>
			)}
			{!isEmpty && hasChecked && (
				<Menu.Item>
					<Button type="link" onClick={onBatchShow}>
						批量显示
					</Button>
				</Menu.Item>
			)}
			{!isEmpty && hasChecked && (
				<Menu.Item>
					<Button type="link" onClick={handleBatchDelete}>
						批量删除
					</Button>
				</Menu.Item>
			)}
		</Menu>
	);

	return (
		<Dropdown overlay={menu}>
			<Button type="link">
				操作
				<Icon type="down" />
			</Button>
		</Dropdown>
	);
};

export default BatchEditDropdownComponent;
