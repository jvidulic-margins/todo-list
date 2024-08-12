import { cn } from "shared/lib";

interface Props {
  children?: React.ReactNode;
  className?: string;
  isError?: boolean;
}

export const FormControl = ({ children, className, isError }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-2 focus-within:text-blue-300",
        isError && "text-rose-500",
        className
      )}
    >
      {children}
    </div>
  );
};
