import { Navigate, Outlet } from 'react-router';
import { ON_STEP_TOKEN_NAME, useCookies } from '@/hooks/auth/use-cookies';

import { SidebarProvider, SidebarTrigger } from '@/components/shadcn-ui';
import { SideMenubar } from '@/components/ui';

export const PrivateLayout = () => {
  const { cookies } = useCookies();

  if (!cookies[ON_STEP_TOKEN_NAME]) {
    return <Navigate to="/" />;
  }

  return (
    <SidebarProvider>
      <SideMenubar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};
