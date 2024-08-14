import { cn } from "shared/lib";

interface Props {
  htmlFor?: string;
  children?: React.ReactNode;
  className?: string;
  isError?: boolean;
}

/**
 * Label used inside FormControl, see TextField and PasswordField.
 */
export const FormControlLabel = ({
  children,
  className,
  isError,
  ...props
}: Props) => {
  return (
    <label className={cn(isError && "text-rose-400", className)} {...props}>
      {children}
    </label>
  );
};
