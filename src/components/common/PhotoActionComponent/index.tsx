import React, { FC, MouseEvent } from 'react';

import { Icon } from 'antd';

import './style.scss';

export type PhotoActionComponentPropType = {
	title: string;

	isCover?: boolean;
	classNameWrap?: string;
	classNameTitle?: string;

	onClick?: (event: MouseEvent) => void;
	onChecked?: () => void;

	onDelete: (event: MouseEvent) => void;
	onEdit: (event: MouseEvent) => void;
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
		onChecked,
		isCover,
	} = props;
	return (
		<>
			<section className={`photo-action ${classNameWrap}`}>
				{children}
				<div
					className={`photo-action_wrap ${!onChecked &&
						'photo-action_wrap__border'}`}
					onClick={onClick}>
					<Icon
						type="delete"
						className="photo-action_item"
						onClick={onDelete}
					/>
					<Icon type="edit" className="photo-action_item" onClick={onEdit} />
					{onChecked && (
						<Icon
							type="check-circle"
							className={`photo-action_item ${isCover &&
								'photo-action_item__checked'}`}
							onClick={onChecked}
						/>
					)}
				</div>
			</section>
			<p className={`photo-action_title ${classNameTitle}`}>{title}</p>
		</>
	);
};

export default PhotoActionComponent;
