import { CheckboxColor } from "./types";

export const getBaseClasses = (): string =>
  "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-7 before:w-7 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-md before:opacity-0 before:transition-opacity";

export const getCheckboxColorClasses = (color: CheckboxColor): string => {
  if (color === "error") {
    return "border-rose-500 checked:border-rose-500 checked:bg-rose-500 before:bg-rose-gray-500 checked:before:bg-rose-900 hover:before:opacity-10 hover:before:bg-rose-900";
  }
  return "border-blue-gray-200 checked:border-blue-500 checked:bg-blue-500 before:bg-blue-gray-500 checked:before:bg-blue-900 hover:before:opacity-10 hover:before:bg-blue-900";
};
