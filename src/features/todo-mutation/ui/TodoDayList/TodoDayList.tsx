import { useAppSelector } from "shared/lib";
import { Button, SelectComponent } from "shared/ui";
import { TodoList } from "widgets/TodoList";
import { Todo } from "features/todo-mutation";
import { useState } from "react";

interface TodoDayListProps {
  weekdays: string[];
}

export const TodoDayList = ({ weekdays }: TodoDayListProps) => {
  const [selectedWeekDay, setSelectedWeekDay] = useState(weekdays[0]);
  const todos: Todo[] = useAppSelector((state) => state.todo.todos);

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <SelectComponent
        options={weekdays}
        onValueChange={setSelectedWeekDay}
        defaultValue={selectedWeekDay}
        trigger={
          <Button
            variant="text"
            className="font-caveat text-3xl text-indigo-400 font-bold focus-within::outline-none"
          >
            {selectedWeekDay}
          </Button>
        }
      />
      <TodoList todos={todos.filter((todo) => todo.date === selectedWeekDay)} />
    </div>
  );
};
