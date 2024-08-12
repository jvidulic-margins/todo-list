import {
  deleteTodoAction,
  Todo,
  updateTodoAction,
  // useDeleteTodoMutation,
  // useUpdateTodoMutation,
} from "features/todo-mutation";
import { Pencil, Trash } from "lucide-react";
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
    <li className="flex items-center justify-between gap-2 w-full py-2 px-6 pl-3 bg-gray-100 shadow-sm rounded-md">
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
            className="border-none p-2 rounded-md shadow-sm bg-white outline-none font-inherit text-inherit h-auto w-auto text-blue-500"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        )}
      </div>
      <div className="flex items-center gap-2 justify-center">
        {isEditing ? (
          <Button onClick={handleSave}>Save</Button>
        ) : (
          <Button
            onClick={() => setIsEditing(true)}
            variant="icon"
            icon={<Pencil />}
          />
        )}
        <Button
          onClick={handleDelete}
          variant="icon"
          color="error"
          icon={<Trash />}
        />
      </div>
    </li>
  );
};
