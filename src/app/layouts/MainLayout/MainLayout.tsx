import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainLayoutBase } from "shared/ui";
import { Sidebar } from "widgets/Sidebar";

// Example main layout
export const MainLayout = () => {
  return (
    <MainLayoutBase sidebarSlot={<Sidebar />}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MainLayoutBase>
  );
};
