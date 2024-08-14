import { useState } from "react";
import { cn } from "shared/lib";
import { EyeShow, EyeHidden } from "shared/assets/icons";
import { InputBase, type InputBaseProps } from "../InputBase/InputBase";

interface Props extends InputBaseProps {}

/**
 * Base component for PasswordField.
 */
export const PasswordInputBase = ({ className, isError, ...props }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={`relative ${className}`}>
      <InputBase
        type={show ? "text" : "password"}
        className="pr-10 w-full"
        isError={isError}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow((prev) => !prev)}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute top-1/2 right-2 -translate-y-1/2 flex items-center"
      >
        {show ? (
          <EyeShow
            className={cn("fill-white w-6 h-6", isError && "fill-rose-400")}
          />
        ) : (
          <EyeHidden
            className={cn("fill-white w-6 h-6", isError && "fill-rose-400")}
          />
        )}
      </button>
    </div>
  );
};
