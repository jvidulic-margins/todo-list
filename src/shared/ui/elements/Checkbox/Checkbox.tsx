import { forwardRef } from "react";
import { cn } from "shared/lib";
// import { Checkmark } from "shared/assets/icons";
import { getBaseClasses, getCheckboxColorClasses } from "./styles";

export interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  disabled?: boolean;
  crossedWhenChecked?: boolean;
  color?: "primary" | "error";
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      checked,
      onChange,
      label,
      crossedWhenChecked = false,
      disabled,
      color = "primary",
      ...props
    },
    ref
  ) => {
    const classes = cn(getBaseClasses(), getCheckboxColorClasses(color), {
      "cursor-not-allowed opacity-20": disabled,
    });

    return (
      <label htmlFor={id} className="relative inline-flex p-3 cursor-pointer">
        <div className="relative flex items-center">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={classes}
            disabled={disabled}
            ref={ref}
            {...props}
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            {/* <Checkmark /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        {label && label?.length > 0 && (
          <span
            className={cn(
              "ml-2 font-light text-gray-700 cursor-pointer select-none",
              {
                "line-through": crossedWhenChecked && checked,
              }
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);
