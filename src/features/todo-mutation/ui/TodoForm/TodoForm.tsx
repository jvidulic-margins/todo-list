import { useForm, Controller } from "react-hook-form";
import { cn, useAppDispatch } from "shared/lib";
import { addTodoAction } from "features/todo-mutation";
import { Button, InputBase, SelectComponent } from "shared/ui";

interface TodoFormProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  weekdays: string[];
}

export const TodoForm = ({ onClose, weekdays }: TodoFormProps) => {
  const { register, handleSubmit, control, watch, reset } = useForm<{
    todo: string;
    date: string;
  }>();
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async ({ todo, date }) => {
    try {
      dispatch(
        addTodoAction({
          id: Date.now(),
          todo,
          completed: false,
          userId: Date.now(),
          date,
        })
      );
      reset();
      onClose(false);
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  });

  const todoValue = watch("todo");
  const dateValue = watch("date");

  const isSubmitDisabled = !todoValue || !dateValue;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
      <InputBase
        registration={register("todo", { required: true })}
        placeholder="Add new todo"
        className="w-full text-gray-700"
      />
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <SelectComponent
            options={weekdays}
            defaultValue={field.value}
            onValueChange={(value) => field.onChange(value)}
            triggerClassName={cn(
              "border-slate-300 border bg-transparent rounded py-2 px-4 focus:border-indigo-200 focus:outline-none w-full text-left",
              { "text-gray-400": !dateValue }
            )}
          />
        )}
        rules={{ required: true }}
      />
      <Button type="submit" disabled={isSubmitDisabled}>
        Add new todo
      </Button>
    </form>
  );
};
