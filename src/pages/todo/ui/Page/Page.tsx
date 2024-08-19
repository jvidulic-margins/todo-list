import {
  generateWeekdays,
  TodoDayList,
  TodoForm,
} from "features/todo-mutation";
import { useState } from "react";
import { Button, Head, SelectComponent } from "shared/ui";
import { DialogComponent } from "widgets/Dialog";

const weekdays = generateWeekdays();

export const TodoPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWeekDay, setSelectedWeekDay] = useState(weekdays[0]);

  return (
    <>
      <Head title="Todo List" />
      <div className="p-8 gap-y-8 flex flex-col items-center h-screen w-full">
        <h1 className="text-5xl font-bold font-caveat text-indigo-900">
          Todo List
        </h1>
        <div className="w-full flex items-center justify-between mt-10">
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
          <DialogComponent
            title="Add New Todo"
            description="Add a new task and select a due date within the next week."
            content={<TodoForm onClose={setIsOpen} weekdays={weekdays} />}
            trigger={<Button variant="contained">Add new todo</Button>}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
        <TodoDayList selectedWeekDay={selectedWeekDay} />
      </div>
    </>
  );
};
