import { useId } from "react";
import { InputBase, type InputBaseProps } from "../InputBase/InputBase";
import { FormControl } from "../FormControl/FormControl";
import { FormControlLabel } from "../FormControlLabel/FormControlLabel";
import { FormHelperText } from "../FormHelperText/FormHelperText";

interface Props extends InputBaseProps {
  isError?: boolean;
  helperText?: string;
  label?: string;
}

/**
 * Text field with label and helper text.
 */
export const TextField = ({
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
      <InputBase
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
