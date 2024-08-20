import { TodoList } from "widgets/TodoList";
import { statusColumns, useDragHooks } from "features/todo-mutation";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { createPortal } from "react-dom";
import { TodoItem } from "widgets/TodoItem";

interface TodoDayListProps {
  selectedWeekDay: string;
}

export const TodoDayList = ({ selectedWeekDay }: TodoDayListProps) => {
  const { activeTodo, todos, onDragOver, onDragEnd, onDragStart } =
    useDragHooks();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className="grid grid-cols-3 gap-3 w-full m-0">
        {statusColumns.map((column) => (
          <TodoList
            column={column}
            todos={todos.filter(
              (todo) =>
                todo.date === selectedWeekDay && todo.status === column.status
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
