import { TodoForm, TodoList } from "features/todo-mutation";
import { Head } from "shared/ui";

export const TodoPage = () => {
  return (
    <>
      <Head title="Todo List" />
      <div className="flex flex-col min-w-[300px] sm:min-w-[500px] p-8 gap-y-8 items-center bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-blue-500">Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
};
