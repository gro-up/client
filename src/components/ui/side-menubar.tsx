import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu } from '@/components/shadcn-ui';
import { Navigations } from './navigations';
import { UserMenu } from './user-menu';

export const SideMenubar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <UserMenu />
          <Navigations />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
    </Sidebar>
  );
};
