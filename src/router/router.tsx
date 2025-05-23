import { createBrowserRouter, RouterProvider } from 'react-router';
import { PublicLayout } from '@/layouts/public-layout';
import { PrivateLayout } from '@/layouts/private-layout';
import { ROUTER_PATH } from './paths';

import LandingPage from '@/pages/landing-page';

import CompanyPage from '@/pages/company-page';
import RetrospectivePage from '@/pages/retrospective-page';
import { RouterGuard } from '@/components/guard';
import DashboardPage from '@/pages/dashboard-page';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: ROUTER_PATH.PUBLIC.LANDING,
        element: <LandingPage />,
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
        path: ROUTER_PATH.PRIVATE.CHILD.RETROSPECTIVE,
        element: <RetrospectivePage />,
      },
    ],
  },
  {
    path: '*',
    element: <RouterGuard />,
  },
]);

export const Router = () => {
  return <RouterProvider router={browserRouter} />;
};
