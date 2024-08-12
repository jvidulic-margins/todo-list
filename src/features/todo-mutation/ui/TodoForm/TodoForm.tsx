import { addTodoAction } from "features/todo-mutation";
// import { useAddTodoMutation } from "features/todo-mutation/api/todoApi";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "shared/lib";
import { Button, InputBase } from "shared/ui";

export const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm<{ todo: string }>();
  // const [addTodo] = useAddTodoMutation();
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async ({ todo }) => {
    try {
      // const newTodo = await addTodo({
      //   // id: Date.now(),
      //   todo,
      //   completed: false,
      //   userId: Math.floor(Math.random() * 200) + 1,
      // }).unwrap();

      dispatch(
        addTodoAction({
          id: Date.now(),
          todo,
          completed: false,
          userId: Date.now(),
        })
      );
      reset();
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex gap-2 w-full">
      <InputBase
        registration={register("todo", { required: true })}
        placeholder="Add new todo"
        className="w-full text-gray-700"
      />
      <Button type="submit" variant="icon" icon={<Plus />} />
    </form>
  );
};
