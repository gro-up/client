import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import { PublicLayout } from '../../components/layouts/public-layout';
import { PrivateLayout } from '../../components/layouts/private-layout';
import { ROUTER_PATH } from './constants';

import LandingPage from '@/pages/landing/landing.page';

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
    children: [],
  },
  {
    path: '*',
    element: <Navigate to={ROUTER_PATH.PUBLIC.LANDING} />,
  },
]);

export const Router = () => {
  return <RouterProvider router={browserRouter} />;
};
