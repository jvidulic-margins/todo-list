import { LoginForm } from "features/authentication/login";
import { Head } from "shared/ui";

export const LoginPage = () => {
  return (
    <>
      <Head title="Log In" />
      <div className="flex flex-col gap-y-8 items-center">
        <h1 className="text-4xl font-bold text-indigo-400">Log In</h1>
        <LoginForm />
      </div>
    </>
  );
};
