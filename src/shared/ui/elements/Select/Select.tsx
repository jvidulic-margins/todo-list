import * as Select from "@radix-ui/react-select";
import { SetStateAction } from "react";

interface SelectComponentProps {
  options: string[];
  defaultValue?: string;
  onValueChange?: React.Dispatch<SetStateAction<string>>;
  trigger?: React.ReactNode;
  triggerClassName?: string;
}

export const SelectComponent = ({
  options,
  defaultValue,
  onValueChange,
  trigger,
  triggerClassName,
}: SelectComponentProps) => {
  return (
    <Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
      <Select.Trigger className={triggerClassName}>
        {trigger ?? <Select.Value placeholder="Select date" />}
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className="bg-white border-[1px] border-slate-300 focus:border-indigo-200 focus:outline-none rounded-md shadow-lg max-h-[300px]"
          position="popper"
          align="center"
          side="bottom"
          avoidCollisions={false}
          sideOffset={4}
        >
          <Select.Viewport>
            {options.map((option) => (
              <Select.Item
                key={option}
                value={option}
                className="cursor-pointer p-4 hover:bg-indigo-100 border-b-2 border-gray-100"
              >
                <Select.ItemText>{option}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
