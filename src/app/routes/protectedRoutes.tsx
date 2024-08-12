import { Navigate, type RouteObject } from "react-router-dom";
import { lazyImport } from "shared/lib";
import { MainLayout } from "../layouts/MainLayout/MainLayout";

const { DashboardPage } = lazyImport(
  () => import("pages/dashboard/ui/Page/Page"),
  "DashboardPage"
);

export const protectedRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "*",
        element: <Navigate to="/dashboard" replace />,
      },
    ],
  },
];
