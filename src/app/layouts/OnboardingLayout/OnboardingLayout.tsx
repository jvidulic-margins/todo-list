import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { OnboardingLayoutBase } from "shared/ui";

// Example onboarding layout
export const OnboardingLayout = () => {
  return (
    <Suspense
      fallback={
        <div className="grid min-h-screen place-items-center font-bold text-xl">
          Loading...
        </div>
      }
    >
      <OnboardingLayoutBase>
        <Outlet />
      </OnboardingLayoutBase>
    </Suspense>
  );
};
