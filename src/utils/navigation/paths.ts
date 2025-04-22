import { ROUTER_PATH } from '@/router';
import { Bell, LogOut, User, Mail, Building2, NotebookText, Sun } from 'lucide-react';

import { PathType, SidebarPaths, DropdownPathCategories, DropdownPathItems } from './constants';

interface PathItem {
  title: string;
  type?: PathType;
  icon?: React.ElementType | null;
  to?: string;
  children?: PathItem[];
}

export const SIDEBAR_PATHS: PathItem[] = [
  {
    title: SidebarPaths.DASHBOARD,
    type: PathType.LINK,
    icon: Sun,
    to: ROUTER_PATH.PRIVATE.CHILD.DASHBOARD,
  },
  {
    title: SidebarPaths.COMPANY,
    type: PathType.LINK,
    icon: Building2,
    to: ROUTER_PATH.PRIVATE.CHILD.COMPANY,
  },
  {
    title: SidebarPaths.RETROSPECTIVE,
    type: PathType.LINK,
    icon: NotebookText,
    to: ROUTER_PATH.PRIVATE.CHILD.RETROSPECTIVE,
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
        to: ROUTER_PATH.PRIVATE.CHILD.SETTING.PROFILE,
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
        to: ROUTER_PATH.PRIVATE.CHILD.SETTING.NOTIFICATION,
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
        to: ROUTER_PATH.PRIVATE.CHILD.SETTING.FEEDBACK,
      },
    ],
  },
];
