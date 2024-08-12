import * as yup from "yup";

export interface LoginSchema {
  email: string;
  password: string;
}

export const loginFormSchema: yup.ObjectSchema<LoginSchema> = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("E-mail address is required.")
      .email("Must be a valid e-mail address.")
      .transform((currentValue) => currentValue?.trim()),
    password: yup
      .string()
      .required("Password is required.")
      .transform((currentValue) => currentValue?.trim()),
  });
