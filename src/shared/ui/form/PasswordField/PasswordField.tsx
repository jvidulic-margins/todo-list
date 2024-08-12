import { useId } from "react";
import { type InputBaseProps } from "../InputBase/InputBase";
import { PasswordInputBase } from "../PasswordInputBase/PasswordInputBase";
import { FormControl } from "../FormControl/FormControl";
import { FormControlLabel } from "../FormControlLabel/FormControlLabel";
import { FormHelperText } from "../FormHelperText/FormHelperText";

interface Props extends InputBaseProps {
  isError?: boolean;
  helperText?: string;
  label?: string;
}

/**
 * Password field with label and helper text.
 */
export const PasswordField = ({
  isError,
  helperText,
  label,
  className,
  ...props
}: Props) => {
  const inputId = useId();
  const helperTextId = useId();

  return (
    <FormControl className={className} isError={isError}>
      {label && (
        <FormControlLabel htmlFor={inputId} isError={isError}>
          {label}
        </FormControlLabel>
      )}
      <PasswordInputBase
        id={inputId}
        aria-describedby={helperTextId}
        isError={isError}
        {...props}
      />
      {helperText && (
        <FormHelperText id={helperTextId} isError={isError}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
