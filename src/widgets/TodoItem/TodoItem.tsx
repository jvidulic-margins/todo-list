import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  deleteTodoAction,
  Todo,
  updateTodoAction,
} from "features/todo-mutation";
import { Pencil, Save, Trash } from "lucide-react";
import { useState } from "react";
import { cn, useAppDispatch } from "shared/lib";
import { Button, Checkbox } from "shared/ui";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.todo);
  const dispatch = useAppDispatch();
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: todo.id,
    data: {
      type: "Todo",
      todo,
    },
    disabled: isEditing,
  });

  const itemClass =
    "flex flex-row items-center justify-between gap-2 w-full py-2 max-[450px]:px-4 px-6 max-[450px]:pl-1 pl-3 bg-gray-100 shadow-sm rounded-md max-[450px]:text-sm";

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleSave = async () => {
    try {
      dispatch(updateTodoAction({ ...todo, id: todo.id, todo: task }));
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update todo", error);
    }
  };

  const handleDelete = async () => {
    try {
      dispatch(deleteTodoAction(todo.id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const handleToggleComplete = async () => {
    try {
      dispatch(
        updateTodoAction({ ...todo, id: todo.id, completed: !todo.completed })
      );
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={cn(itemClass, "h-16 opacity-50 border-2 border-indigo-500")}
      />
    );
  }

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={itemClass}
    >
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
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
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
