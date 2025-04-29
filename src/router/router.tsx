import { createBrowserRouter, RouterProvider } from "react-router";
import { PublicLayout } from "@/layouts/public-layout";
import { PrivateLayout } from "@/layouts/private-layout";
import { ROUTER_PATH } from "./paths";

import LandingPage from "@/pages/landing-page";

import CompanyPage from "@/pages/company-page";
import { RouterGuard } from "@/components/guard";
import DashboardPage from "@/pages/dashboard-page";
import SchedulePage from "@/pages/schedule-page";
import LoginPage from "@/pages/login-page";
import SignupPage from "@/pages/signup-page";
import ResetPasswordPage from "@/pages/reset-password-page";
import ReviewPage from "@/pages/review-page";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: ROUTER_PATH.PUBLIC.LANDING,
        element: <LandingPage />,
      },
      {
        path: ROUTER_PATH.PUBLIC.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTER_PATH.PUBLIC.SIGNUP,
        element: <SignupPage />,
      },
      {
        path: ROUTER_PATH.PUBLIC.RESETPASSWORD,
        element: <ResetPasswordPage />,
      },
    ],
  },
  {
    path: ROUTER_PATH.PRIVATE.PARENT.APP,
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <RouterGuard />,
      },

      {
        path: `${ROUTER_PATH.PRIVATE.CHILD.DASHBOARD}`,
        element: <DashboardPage />,
      },

      {
        path: `${ROUTER_PATH.PRIVATE.CHILD.COMPANY}`,
        element: <CompanyPage />,
      },
      {
        path: ROUTER_PATH.PRIVATE.CHILD.REVIEW,
        element: <ReviewPage />,
      },
      {
        path: ROUTER_PATH.PRIVATE.CHILD.SCHEDULE,
        element: <SchedulePage />,
      },
    ],
  },
  {
    path: "*",
    element: <RouterGuard />,
  },
]);

export const Router = () => {
  return <RouterProvider router={browserRouter} />;
};
