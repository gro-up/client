import { ON_STEP_TOKEN_NAME, useCookies } from '@/hooks/auth/use-cookies';
import { Navigate, Outlet } from 'react-router';
import { ROUTER_PATH } from '../router/paths';

export const PublicLayout = () => {
  const { cookies } = useCookies();

  if (cookies[ON_STEP_TOKEN_NAME]) {
    return (
      <Navigate to={`${ROUTER_PATH.PRIVATE.PARENT.APP}/${ROUTER_PATH.PRIVATE.CHILD.SCHEDULE}`} />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Outlet />
    </div>
  );
};
