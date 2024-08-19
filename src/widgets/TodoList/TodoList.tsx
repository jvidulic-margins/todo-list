import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import { useFetchTodosQuery } from "entities/user";
import {
  generateWeekdays,
  ProgressBarColumn,
  setTodos,
  Todo,
} from "features/todo-mutation";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "shared/lib";
import { Loading } from "shared/ui/elements/Loading";
import { TodoItem } from "widgets/TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
  column: ProgressBarColumn;
}

export const TodoList = ({ todos, column }: TodoListProps) => {
  const dispatch = useAppDispatch();
  const { setNodeRef } = useDroppable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });

  const todosIds = useMemo(() => todos.map((todo) => todo.id), [todos]);

  const { data: responseData, isLoading } = useFetchTodosQuery({
    limit: 5,
    skip: 0,
  });

  useEffect(() => {
    if (responseData) {
      const todos: Todo[] = responseData.todos.map((todo: Todo) => ({
        ...todo,
        date: generateWeekdays()[0],
        status: "todo",
      }));
      dispatch(setTodos(todos));
    }
  }, [dispatch, responseData]);

  if (isLoading) return <Loading />;

  const renderTodos = () => {
    if (todos.length === 0) {
      if (column.id === "todo") {
        return (
          <div className="min-h-[100px] flex items-center justify-center py-2 px-6 pl-3 bg-gray-100 shadow-sm rounded-md w-full">
            There are no tasks scheduled for today.
          </div>
        );
      }
      return <div />;
    }

    return todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />);
  };

  return (
    <div
      ref={setNodeRef}
      key={column.id}
      id={column.id}
      className="w-full h-full rounded-md shadow-md bg-white p-8 min-h-[500px] space-y-5"
    >
      <p className="font-caveat font-bold text-2xl text-indigo-900 rounded-md p-3 bg-indigo-200">
        {column.title}
      </p>
      <ul className="flex flex-col w-full gap-2 justify-center items-start text-gray-700">
        <SortableContext items={todosIds}>{renderTodos()}</SortableContext>
      </ul>
    </div>
  );
};
