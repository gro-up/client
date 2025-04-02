import { Navigate, Outlet } from 'react-router';
import { ON_STEP_TOKEN_NAME, useCookies } from '@/hooks/auth';
import { ROUTER_PATH } from '@/router';
import { Sidebar } from '@/components/sidebar';

export const PrivateLayout = () => {
  const { cookies } = useCookies();

  if (!cookies[ON_STEP_TOKEN_NAME]) {
    return <Navigate to={ROUTER_PATH.PUBLIC.LANDING} />;
  }

  return (
    <main className="flex gap-4 bg-gray-200 w-full h-screen pt-10">
      <Sidebar />

      <Outlet />
    </main>
  );
};
