import { Over, UniqueIdentifier } from "@dnd-kit/core";
import {
  StatusColumn,
  StatusEnum,
  Todo,
  validateType,
} from "features/todo-mutation";
import { DraggableTypesEnum } from "./types";

export const findTodoIndex = (todos: Todo[], id: UniqueIdentifier) => {
  const index = todos.findIndex((todo) => todo.id === id);
  return index;
};

export const getTodoStatus = (over: Over, todos: Todo[]): StatusEnum | null => {
  const isOverTodo = validateType(over, DraggableTypesEnum.TODO);
  const isOverColumn = validateType(over, DraggableTypesEnum.COLUMN);

  if (isOverTodo) {
    const overIndex = findTodoIndex(todos, over.id);
    if (overIndex === -1) return null;

    const overTodo = todos[overIndex];
    return overTodo.status;
  }
  if (isOverColumn) {
    const overColumn = over.data.current?.column as StatusColumn | undefined;
    return overColumn ? overColumn.status : null;
  }

  return null;
};
