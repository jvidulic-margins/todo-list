import { Active, Over } from "@dnd-kit/core";
import { DraggableTypesEnum } from "entities/todo";

export const validateType = (item: Active | Over, type: DraggableTypesEnum) => {
  return item.data.current?.type === type;
};

export const dragOverValidate = (active: Active, over: Over) => {
  const isActiveTodo = validateType(active, DraggableTypesEnum.TODO);
  const isOverTodo = validateType(over, DraggableTypesEnum.TODO);
  const isOverColumn = validateType(over, DraggableTypesEnum.COLUMN);

  return { isActiveTodo, isOverTodo, isOverColumn };
};
