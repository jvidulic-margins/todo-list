import { useFetchTodosQuery } from "entities/user";
import { setTodos, Todo } from "features/todo-mutation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "shared/lib";
import { TodoItem } from "widgets/TodoItem/TodoItem";

export const TodoList = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.todos);

  const {
    data: responseData,
    isLoading,
    error,
  } = useFetchTodosQuery({
    limit: 5,
    skip: 0,
  });

  useEffect(() => {
    if (responseData) {
      dispatch(setTodos(responseData.todos));
    }
  }, [dispatch, responseData]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todos</div>;

  return (
    <ul className="flex flex-col gap-2 justify-cente items-start w-full text-gray-700">
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
