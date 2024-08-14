import type { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "shared/lib";

export interface InputBaseProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  registration?: Partial<UseFormRegisterReturn>;
  isError?: boolean;
}

/**
 * Base component for all inputs.
 * @param registration - React Hook Form registration object
 */
export const InputBase = ({
  isError,
  registration,
  className,
  ...props
}: InputBaseProps) => {
  return (
    <input
      className={cn(
        "border-slate-300 border bg-transparent rounded py-2 px-4 focus:border-indigo-200 focus:outline-none w-full",
        isError && "border-rose-400 focus:border-rose-300",
        className
      )}
      {...props}
      {...registration}
    />
  );
};
