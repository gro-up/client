import { Link } from 'react-router';

import { SidebarMenuItem, SidebarMenuButton } from '@/components/shadcn-ui';

import { NAVIGATION_PATHS } from './paths';

export const Navigations = () => (
  <div className="mt-5">
    {NAVIGATION_PATHS.map(item => (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild>
          {item.url && (
            <Link to={item.url}>
              {item.icon && <item.icon />} <span>{item.title}</span>
            </Link>
          )}
        </SidebarMenuButton>
      </SidebarMenuItem>
    ))}
  </div>
);
