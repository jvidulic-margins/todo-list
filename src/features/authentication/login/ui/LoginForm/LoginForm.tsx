import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, PasswordField, TextField } from "shared/ui";
import { useLoginMutation } from "entities/session";
import { type LoginSchema, loginFormSchema } from "../../model/loginFormSchema";

export const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({ resolver: yupResolver(loginFormSchema) });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-2 w-full">
      <TextField
        type="email"
        registration={register("email")}
        placeholder="Email"
        label="Email"
        helperText="Email is required"
        isError={!!errors.email}
      />
      <PasswordField
        registration={register("password")}
        placeholder="Password"
        label="Password"
        isError={!!errors.password}
        helperText="Password is required"
        className="mb-4"
      />
      <Button type="submit" isLoading={isLoading}>
        Submit
      </Button>
      <Button variant="link" to="/forgot-password">
        Forgot password?
      </Button>
    </form>
  );
};
