import { ROUTER_PATH } from '@/lib/router';
import { Bell, Calendar, Home, ListCheck, LogOut, User, Mail } from 'lucide-react';

interface PathItem {
  title: string;
  icon?: React.ElementType | null;
  url?: string;
  children?: PathItem[];
}

export const NAVIGATION_PATHS: PathItem[] = [
  { title: '대시보드', icon: Home, url: ROUTER_PATH.PRIVATE.DASHBOARD },
  { title: '일정', icon: Calendar, url: ROUTER_PATH.PRIVATE.SCHEDULE },
  { title: '오늘의 문제', icon: ListCheck, url: ROUTER_PATH.PRIVATE.QUESTION },
];

export const DROPDOWN_PATHS: PathItem[] = [
  {
    title: '계정',
    children: [
      { title: '프로필', icon: User, url: 'profile' },
      { title: '로그아웃', icon: LogOut },
    ],
  },
  {
    title: '알림',
    children: [{ title: '알림', icon: Bell, url: 'notification' }],
  },
  {
    title: '지원',
    children: [{ title: '문의 및 피드백', icon: Mail, url: 'feedback' }],
  },
];
