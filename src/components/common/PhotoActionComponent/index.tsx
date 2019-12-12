import React, { FC, MouseEvent } from 'react';

import { Icon } from 'antd';

import './style.scss';

export type PhotoActionComponentPropType = {
	classNameWrap?: string;
	classNameTitle?: string;
	onClick?: (event: MouseEvent) => void;
	onDelete: (event: MouseEvent) => void;
	onEdit: (event: MouseEvent) => void;
	title: string;
};

const PhotoActionComponent: FC<PhotoActionComponentPropType> = props => {
	const {
		onClick,
		onDelete,
		onEdit,
		title,
		classNameWrap,
		classNameTitle,
		children,
	} = props;
	return (
		<>
			<section className={`photo-action ${classNameWrap}`}>
				{children}
				<div className="photo-action_wrap" onClick={onClick}>
					<Icon
						type="delete"
						className="photo-action_item"
						onClick={onDelete}
					/>
					<Icon type="edit" className="photo-action_item" onClick={onEdit} />
				</div>
			</section>
			<p className={`photo-action_title ${classNameTitle}`}>{title}</p>
		</>
	);
};

export default PhotoActionComponent;
