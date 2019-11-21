import React, { FC, ReactNode } from "react";

import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import DraggableItem from "@/components/common/DraggableItem";

export type IDraggableComponentPropType = {
  list: Array<{
    id: string;
    [key: string]: any;
  }>;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  render: (item: any, index: number) => ReactNode;
};

const DraggableComponent: FC<IDraggableComponentPropType> = props => {
  const { list, moveCard, render } = props;
  return (
    <DndProvider backend={HTML5Backend}>
      {list.map((item, index) => (
        <DraggableItem moveCard={moveCard} index={index} key={item.id}>
          {render(item, index)}
        </DraggableItem>
      ))}
    </DndProvider>
  );
};

export default DraggableComponent;
