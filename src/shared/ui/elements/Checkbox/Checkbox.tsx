import { forwardRef } from "react";
import { cn } from "shared/lib";
import { Checkmark } from "shared/assets/icons";
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
            <Checkmark />
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
