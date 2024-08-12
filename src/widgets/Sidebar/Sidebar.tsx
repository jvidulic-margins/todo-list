import { LogoutButton } from "features/authentication/logout";

export const Sidebar = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between items-start">
      <h4 className="text-lg font-bold">FE Boilerplate</h4>
      <LogoutButton />
    </div>
  );
};
