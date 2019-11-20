import React, { FC, useRef } from "react";
import { inject, observer } from "mobx-react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { XYCoord } from "dnd-core";

import { Checkbox, Col, Icon, Input, Row, Typography } from "antd";

import { MenuType } from "@/store/HomePageStore/hompage";
import { StoreType } from "@/store/store";

import "./style.scss";

const {Text} = Typography;

export type IMenuEditItemComponentPropType = {
	id: string
	index: number
	moveCard: (dragIndex: number, hoverIndex: number) => void
	item: MenuType & { error: boolean }
	isEditing: boolean
}

interface MenuEditItemComponent {
	index: number
	id: string
	type: string
}

const MenuEditItemComponent: React.FC<IMenuEditItemComponentPropType & StoreType> = ({id, index, moveCard, ...props}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [, drop] = useDrop({
		accept: "item",
		hover(item: MenuEditItemComponent, monitor: DropTargetMonitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;

			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}

			// Determine rectangle on screen
			const hoverBoundingRect = ref.current!.getBoundingClientRect();

			// Get vertical middle
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

			// Determine mouse position
			const clientOffset = monitor.getClientOffset();

			// Get pixels to the top
			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%

			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}

			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}

			// Time to actually perform the action
			moveCard(dragIndex, hoverIndex);

			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		}
	});

	const [{isDragging}, drag] = useDrag({
		item: {type: "item", id, index},
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging()
		})
	});

	const opacity = isDragging ? 0 : 1;

	drag(drop(ref));

	const {item, isEditing} = props;

	return (
		<div ref={ref} style={{opacity}} className="menu-edit_list">
			<Col>
				<Row type="flex" align="middle">
					<Col span={10}>
						<Input
							value={item.name}
							maxLength={6}
							onChange={(e) => {
								props.homepageStore.changeMenu({item, value: e.target.value});
							}}
							prefix={<Icon type={item.type}/>}
							allowClear={true}
							disabled={!isEditing}
						/>
						{
							item.error && <Text type="danger">菜单名称不能为空</Text>
						}
					</Col>
					<Col span={6} offset={1}>
						<Checkbox
							checked={item.show}
							onChange={() => props.homepageStore.changeMenu({item, value: !item.show, type: "checkbox"})}
							disabled={!isEditing}
						>
							是否显示
						</Checkbox>
					</Col>
				</Row>
			</Col>
		</div>

	);
};

const ObserverMenuEditItemComponent = inject("homepageStore")(observer(MenuEditItemComponent));

export default ObserverMenuEditItemComponent as unknown as FC<IMenuEditItemComponentPropType>;
