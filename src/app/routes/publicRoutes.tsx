import { Navigate, type RouteObject } from "react-router-dom";
import { lazyImport } from "shared/lib";
import { OnboardingLayout } from "../layouts/OnboardingLayout/OnboardingLayout";

const { LoginPage } = lazyImport(() => import("pages/login"), "LoginPage");
const { TodoPage } = lazyImport(() => import("pages/todo"), "TodoPage");

export const publicRoutes: RouteObject[] = [
  {
    element: <OnboardingLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/todolist",
        element: <TodoPage />,
      },
      {
        path: "*",
        element: <Navigate to="/login" replace />,
      },
    ],
  },
];
