import { useFetchTodosQuery } from "entities/user";
import { setTodos, Todo } from "features/todo-mutation";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib";
import { Loading } from "shared/ui/elements/Loading";
import { TodoItem } from "widgets/TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  const dispatch = useAppDispatch();

  const { data: responseData, isLoading } = useFetchTodosQuery({
    limit: 5,
    skip: 0,
  });

  useEffect(() => {
    if (responseData) {
      dispatch(setTodos(responseData.todos));
    }
  }, [dispatch, responseData]);
  if (isLoading) return <Loading />;

  return (
    <div className="max-h-[400px] overflow-y-scroll styled-scrollbar w-full">
      <ul className="flex flex-col w-full gap-2 justify-center items-start text-gray-700">
        {todos.length === 0 ? (
          <div className="min-h-[100px] flex items-center justify-center py-2 px-6 pl-3 bg-gray-100 shadow-sm rounded-md w-full">
            There are no tasks scheduled for today.
          </div>
        ) : (
          todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </ul>
    </div>
  );
};
