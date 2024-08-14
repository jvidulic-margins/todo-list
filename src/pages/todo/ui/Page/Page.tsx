import {
  generateWeekdays,
  TodoDayList,
  TodoForm,
} from "features/todo-mutation";
import { useState } from "react";
import { Button, Head } from "shared/ui";
import { DialogComponent } from "widgets/Dialog";

const weekdays = generateWeekdays();

export const TodoPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head title="Todo List" />
      <div className="m-auto p-8 gap-y-10 flex flex-col items-center rounded-md shadow-sm w-full sm:max-w-[500px] bg-white">
        <h1 className="text-5xl font-bold font-caveat text-indigo-900">
          Todo List
        </h1>
        <TodoDayList weekdays={weekdays} />
        <DialogComponent
          title="Add New Todo"
          description="Add a new task and select a due date within the next week."
          content={<TodoForm onClose={setIsOpen} weekdays={weekdays} />}
          trigger={<Button size="lg">Add new todo</Button>}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  );
};
