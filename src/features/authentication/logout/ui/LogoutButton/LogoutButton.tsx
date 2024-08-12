import { Button } from "shared/ui";
import { useLogoutMutation } from "entities/session";

export const LogoutButton = () => {
  const [logout, { isLoading }] = useLogoutMutation();

  return (
    <Button
      isLoading={isLoading}
      variant="text"
      color="error"
      onClick={() => logout()}
    >
      Log Out
    </Button>
  );
};
