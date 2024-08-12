import { useRoutes } from "react-router-dom";
// import { useAppSelector } from "shared/lib";
import { publicRoutes } from "./publicRoutes";
import { protectedRoutes } from "./protectedRoutes";

// 👉 All routes exposed for testing

export const AppRoutes = () => {
  // const isAuth = useAppSelector((state) => state.session.isAuthenticated);

  // const routes = isAuth ? protectedRoutes : publicRoutes;
  const routes = [...publicRoutes, ...protectedRoutes]; // Enables public routes for testing

  const element = useRoutes(routes);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{element}</>;
};
