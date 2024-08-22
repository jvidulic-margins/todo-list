import { useState } from "react";
import { DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core";
import {
  DraggableTypesEnum,
  findTodoIndex,
  getTodoStatus,
} from "entities/todo";
import { arrayMove } from "@dnd-kit/sortable";
import { useAppDispatch, useAppSelector } from "shared/lib";
import { setTodos } from "./todoSlice";
import { Todo } from "./types";
import { dragOverValidate } from "./drag.validators";

export const useDrag = () => {
  const [activeTodo, setActiveTodo] = useState<Todo | null>(null);
  const dispatch = useAppDispatch();
  const todos: Todo[] = useAppSelector((state) => state.todo.todos);

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === DraggableTypesEnum.TODO) {
      setActiveTodo(event.active.data.current?.todo);
    }
  };
  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const { isActiveTodo, isOverTodo, isOverColumn } = dragOverValidate(
      active,
      over
    );

    if (isActiveTodo && (isOverTodo || isOverColumn)) {
      const updatedTodos = [...todos];
      const activeIndex = findTodoIndex(updatedTodos, activeId);

      if (activeIndex === -1) return;
      const activeTodo = updatedTodos[activeIndex];
      const newStatus = getTodoStatus(over, updatedTodos);
      if (newStatus && activeTodo.status !== newStatus) {
        updatedTodos[activeIndex] = { ...activeTodo, status: newStatus };

        const movedTodos = arrayMove(
          updatedTodos,
          activeIndex,
          todos.findIndex((todo) => todo.status === newStatus)
        );

        dispatch(setTodos(movedTodos));
      }
    }
  };
  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const activeIndex = findTodoIndex(todos, activeId);
    const overIndex = findTodoIndex(todos, overId);

    const movedTodos = arrayMove(todos, activeIndex, overIndex);
    dispatch(setTodos(movedTodos));
  };

  return { activeTodo, todos, onDragStart, onDragOver, onDragEnd };
};
