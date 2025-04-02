import { ROUTER_PATH } from '@/router';
import { Bell, Calendar, LogOut, User, Mail, Building2, NotebookText } from 'lucide-react';

import { PathType, SidebarPaths, DropdownPathCategories, DropdownPathItems } from './constants';

interface PathItem {
  title: string;
  type?: PathType;
  icon?: React.ElementType | null;
  url?: string;
  children?: PathItem[];
}

export const SIDEBAR_PATHS: PathItem[] = [
  {
    title: SidebarPaths.SCHEDULE,
    type: PathType.LINK,
    icon: Calendar,
    url: ROUTER_PATH.PRIVATE.CHILD.SCHEDULE,
  },
  {
    title: SidebarPaths.COMPANY,
    type: PathType.LINK,
    icon: Building2,
    url: ROUTER_PATH.PRIVATE.CHILD.COMPANY,
  },
  {
    title: SidebarPaths.RETROSPECTIVE,
    type: PathType.LINK,
    icon: NotebookText,
    url: ROUTER_PATH.PRIVATE.CHILD.RETROSPECTIVE,
  },
];

export const DROPDOWN_PATHS: PathItem[] = [
  {
    title: DropdownPathCategories.ACCOUNT,
    children: [
      {
        title: DropdownPathItems.PROFILE,
        type: PathType.LINK,
        icon: User,
        url: ROUTER_PATH.PRIVATE.CHILD.SETTING.PROFILE,
      },
      {
        title: DropdownPathItems.LOGOUT,
        type: PathType.EVENT,
        icon: LogOut,
      },
    ],
  },
  {
    title: DropdownPathCategories.NOTIFICATION,
    children: [
      {
        title: DropdownPathItems.NOTIFICATION,
        type: PathType.LINK,
        icon: Bell,
        url: ROUTER_PATH.PRIVATE.CHILD.SETTING.NOTIFICATION,
      },
    ],
  },
  {
    title: DropdownPathCategories.FEEDBACK,
    children: [
      {
        title: DropdownPathItems.FEEDBACK,
        type: PathType.LINK,
        icon: Mail,
        url: ROUTER_PATH.PRIVATE.CHILD.SETTING.FEEDBACK,
      },
    ],
  },
];
