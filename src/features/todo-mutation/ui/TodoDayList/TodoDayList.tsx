import { useAppDispatch, useAppSelector } from "shared/lib";
import { TodoList } from "widgets/TodoList";
import { progressBarColumns, setTodos, Todo } from "features/todo-mutation";
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import { createPortal } from "react-dom";
import { TodoItem } from "widgets/TodoItem";
import { arrayMove } from "@dnd-kit/sortable";

interface TodoDayListProps {
  selectedWeekDay: string;
}

export const TodoDayList = ({ selectedWeekDay }: TodoDayListProps) => {
  const todos: Todo[] = useAppSelector((state) => state.todo.todos);
  const [activeTodo, setActiveTodo] = useState<Todo | null>(null);

  const dispatch = useAppDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  const onDragStart = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Todo") {
      setActiveTodo(event.active.data.current?.todo);
    }
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const isActiveTodo = active.data.current?.type === "Todo";
    const isOverTodo = over.data.current?.type === "Todo";
    const isOverColumn = over.data.current?.type === "Column";

    if (isActiveTodo && (isOverTodo || isOverColumn)) {
      const updatedTodos = [...todos];
      const activeIndex = updatedTodos.findIndex(
        (todo) => todo.id === activeId
      );

      if (activeIndex === -1) return;

      const activeTodo = updatedTodos[activeIndex];
      let newStatus = activeTodo.status;

      if (isOverTodo) {
        const overIndex = updatedTodos.findIndex((todo) => todo.id === overId);
        if (overIndex === -1) return;

        const overTodo = updatedTodos[overIndex];
        newStatus = overTodo.status;

        if (activeTodo.status !== overTodo.status) {
          const updatedActiveTodo = {
            ...activeTodo,
            status: newStatus,
          };
          updatedTodos[activeIndex] = updatedActiveTodo;
        }
      } else if (isOverColumn) {
        const overColumn = over.data.current?.column;
        newStatus = overColumn.id;

        if (activeTodo.status !== newStatus) {
          const updatedActiveTodo = {
            ...activeTodo,
            status: newStatus,
          };
          updatedTodos[activeIndex] = updatedActiveTodo;
        }
      }

      const movedTodos = arrayMove(
        updatedTodos,
        activeIndex,
        todos.findIndex((todo) => todo.status === newStatus)
      );

      dispatch(setTodos(movedTodos));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <div className="grid grid-cols-3 gap-3 w-full m-0">
        {progressBarColumns.map((column) => (
          <TodoList
            column={column}
            todos={todos.filter(
              (todo) =>
                todo.date === selectedWeekDay && todo.status === column.id
            )}
          />
        ))}
      </div>
      {createPortal(
        <DragOverlay>
          {activeTodo && <TodoItem todo={activeTodo} />}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
};
