import { useState } from "react";
import { useAppSelector } from "shared/lib";
import { Button, SelectComponent } from "shared/ui";
import { TodoList } from "widgets/TodoList";
import { Todo, generateWeekdays } from "features/todo-mutation";

export const TodoDayList = () => {
  const weekdays = generateWeekdays();
  const [selectedWeekday, setSelectedWeekday] = useState(weekdays[0]);
  const todos: Todo[] = useAppSelector((state) => state.todo.todos);

  const handleValueChange = (value: string) => {
    setSelectedWeekday(value);
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <SelectComponent
        options={weekdays}
        onValueChange={handleValueChange}
        defaultValue={selectedWeekday}
        trigger={
          <Button
            variant="text"
            className="font-caveat text-3xl text-indigo-400 font-bold focus:outline-none"
          >
            {selectedWeekday}
          </Button>
        }
      />
      <TodoList todos={todos.filter((todo) => todo.date === selectedWeekday)} />
    </div>
  );
};
