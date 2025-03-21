import { ON_STEP_TOKEN_NAME, useCookies } from '@/hooks/auth/use-cookies';
import { Navigate, Outlet } from 'react-router';

export const PrivateLayout = () => {
  const { cookies } = useCookies();

  if (!cookies[ON_STEP_TOKEN_NAME]) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
