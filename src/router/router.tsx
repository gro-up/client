import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { PublicLayout } from '../layouts/public-layout';
import { PrivateLayout } from '../layouts/private-layout';
import { ROUTER_PATH } from './paths';
import LandingPage from '@/pages/landing-page';
import SchedulePage from '@/pages/schedule-page';

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
        path: ROUTER_PATH.PRIVATE.CHILD.SCHEDULE,
        element: <SchedulePage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTER_PATH.PUBLIC.LANDING} />,
  },
]);

export const Router = () => {
  return <RouterProvider router={browserRouter} />;
};
