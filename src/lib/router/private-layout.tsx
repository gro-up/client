import { Navigate, NavLink, Outlet } from 'react-router';
import { ON_STEP_TOKEN_NAME, useCookies } from '@/hooks/auth/use-cookies';
import { ROUTER_PATH } from './constants';

const defaultCSS =
  'p-4 flex justify-center items-center  duration-300 ease-in-out cursor-pointer font-medium';
const activeCSS = 'bg-blue-400 text-white';

const linkHandler = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${activeCSS} ${defaultCSS}` : defaultCSS;

export const PrivateLayout = () => {
  const { cookies } = useCookies();

  if (!cookies[ON_STEP_TOKEN_NAME]) {
    return <Navigate to="/" />;
  }

  return (
    <main className="flex flex-col gap-4 bg-gray-200 w-full h-screen pt-10">
      <nav className="fixed bottom-0 w-[350px] h-[50px] grid grid-cols-3  left-1/2 -translate-x-1/2 bg-gray-100 rounded-t-md z-50 overflow-hidden">
        <NavLink className={linkHandler} to={ROUTER_PATH.PRIVATE.DASHBOARD}>
          대시보드
        </NavLink>
        <NavLink className={linkHandler} to={ROUTER_PATH.PRIVATE.QUESTION}>
          오늘의 문제
        </NavLink>
        <NavLink className={linkHandler} to={ROUTER_PATH.PRIVATE.SCHEDULE}>
          일정
        </NavLink>
      </nav>

      <Outlet />
    </main>
  );
};
