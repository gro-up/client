import { ChevronDown } from 'lucide-react';

import {
  SidebarMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  SidebarMenuButton,
  Avatar,
  AvatarImage,
  DropdownMenuContent,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroup,
} from '@/components/shadcn-ui';

import { DROPDOWN_PATHS } from './paths';
import { useLogout } from '@/hooks/auth/use-logout';
import { Link } from 'react-router';

interface UserMenuProps {
  photoURL: string;
  displayName: string;
}

export const UserMenu = ({ photoURL, displayName }: UserMenuProps) => {
  const { logoutHandler } = useLogout();

  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton>
            <Avatar>
              <AvatarImage src={photoURL} />
            </Avatar>
            <span>{displayName}</span>

            <ChevronDown className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className="flex flex-col gap-2">
            {DROPDOWN_PATHS.map(path => (
              <SidebarGroup key={path.title}>
                <SidebarGroupLabel className="flex items-center gap-2">
                  {path.title}
                </SidebarGroupLabel>

                <SidebarGroupContent>
                  {path.children && (
                    <>
                      {path.children.map(child => (
                        <SidebarMenuItem key={child.title} className="list-none">
                          <SidebarMenuButton className="flex items-center gap-2 text-gray-500">
                            {child.icon && <child.icon />}
                            {child.title === '로그아웃' ? (
                              <span onClick={logoutHandler}>{child.title}</span>
                            ) : (
                              <Link to={child.url ?? ''}>{child.title}</Link>
                            )}
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </>
                  )}
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
};
