import {
  deleteTodoAction,
  Todo,
  updateTodoAction,
  // useDeleteTodoMutation,
  // useUpdateTodoMutation,
} from "features/todo-mutation";
import { Pencil, Save, Trash } from "lucide-react";
import { useState } from "react";
import { useAppDispatch } from "shared/lib";
import { Button, Checkbox } from "shared/ui";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.todo);
  // const [updateTodo] = useUpdateTodoMutation();
  // const [deleteTodo] = useDeleteTodoMutation();
  const dispatch = useAppDispatch();

  const handleSave = async () => {
    try {
      // const updatedTodo = await updateTodo({
      //   id: todo.id,
      //   data: { todo: task },
      // }).unwrap();
      dispatch(updateTodoAction({ ...todo, id: todo.id, todo: task }));
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update todo", error);
    }
  };

  const handleDelete = async () => {
    try {
      // await deleteTodo(todo.id).unwrap();
      dispatch(deleteTodoAction(todo.id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const handleToggleComplete = async () => {
    try {
      // const updatedTodo = await updateTodo({
      //   id: todo.id,
      //   data: { completed: !todo.completed },
      // }).unwrap();
      dispatch(
        updateTodoAction({ ...todo, id: todo.id, completed: !todo.completed })
      );
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  return (
    <li className="flex flex-row items-center justify-between gap-2 w-full py-2 max-[450px]:px-4 px-6 max-[450px]:pl-1 pl-3 bg-gray-100 shadow-sm rounded-md max-[450px]:text-sm">
      <div className="inline-flex items-center w-3/4 whitespace-break-spaces">
        <Checkbox
          id={`todo-checkbox-${todo.id}`}
          checked={todo.completed}
          onChange={handleToggleComplete}
          label={isEditing ? "" : todo.todo}
          crossedWhenChecked
        />
        {isEditing && (
          <textarea
            className="border-none rounded-md px-2 shadow-sm bg-white outline-none font-inherit text-inherit text-indigo-400 max-[450px]:w-[120px]"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        )}
      </div>
      <div className="flex items-center gap-2 justify-center">
        {isEditing ? (
          <Button
            onClick={handleSave}
            variant="icon"
            icon={<Save className="max-sm:w-5 max-sm:h-5" />}
          />
        ) : (
          <Button
            onClick={() => setIsEditing(true)}
            variant="icon"
            icon={<Pencil className="max-sm:w-5 max-sm:h-5" />}
          />
        )}
        <Button
          onClick={handleDelete}
          variant="icon"
          color="error"
          icon={<Trash className="max-sm:w-5 max-sm:h-5" />}
        />
      </div>
    </li>
  );
};
