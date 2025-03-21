import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu } from '@/components/shadcn-ui';

import { firebaseAuth } from '@/lib/firebase/auth';
import { Navigations } from './navigations';
import { UserMenu } from './user-menu';

export const SideMenubar = () => {
  const { currentUser } = firebaseAuth;

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <UserMenu
            photoURL={String(currentUser?.photoURL)}
            displayName={String(currentUser?.displayName)}
          />
          <Navigations />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
    </Sidebar>
  );
};
