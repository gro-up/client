import { ON_STEP_TOKEN_NAME, useCookies } from '@/hooks/auth/use-cookies';
import { Navigate, Outlet } from 'react-router';
import { ROUTER_PATH } from '../../lib/router/constants';

export const PublicLayout = () => {
  const { cookies } = useCookies();

  if (cookies[ON_STEP_TOKEN_NAME]) {
    return <Navigate to={`/on-step/${ROUTER_PATH.PRIVATE.DASHBOARD}`} />;
  }

  return <Outlet />;
};
