import { cn } from "shared/lib";

interface Props {
  id?: string;
  children?: React.ReactNode;
  isError?: boolean;
  className?: string;
}

export const FormHelperText = ({
  children,
  className,
  isError,
  ...props
}: Props) => {
  return (
    <span
      className={cn(
        "text-xs",
        isError ? "text-rose-400" : "text-slate-400",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
