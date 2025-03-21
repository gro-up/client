import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { DashboardPage } from '@/pages/dashboard/dashboard.page';
import LandingPage from '@/pages/landing/landing.page';
import { PublicLayout } from './public-layout';
import { PrivateLayout } from './private-layout';
import { ROUTER_PATH } from './constants';

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
    path: '/on-step',
    element: <PrivateLayout />,
    children: [{ path: ROUTER_PATH.PRIVATE.DASHBOARD, element: <DashboardPage /> }],
  },
  {
    path: '*',
    element: <Navigate to={ROUTER_PATH.PUBLIC.LANDING} />,
  },
]);

export const Router = () => {
  return <RouterProvider router={browserRouter} />;
};
