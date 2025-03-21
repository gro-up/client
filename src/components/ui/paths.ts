import { ROUTER_PATH } from '@/lib/router';
import { Bell, Calendar, Home, ListCheck, LogOut, User, Mail } from 'lucide-react';

interface PathItem {
  title: string;
  type?: 'link' | 'event';
  icon?: React.ElementType | null;
  url?: string;
  children?: PathItem[];
}

export const NAVIGATION_PATHS: PathItem[] = [
  { title: '대시보드', type: 'link', icon: Home, url: ROUTER_PATH.PRIVATE.DASHBOARD },
  { title: '일정', type: 'link', icon: Calendar, url: ROUTER_PATH.PRIVATE.SCHEDULE },
  { title: '오늘의 문제', type: 'link', icon: ListCheck, url: ROUTER_PATH.PRIVATE.QUESTION },
];

export const DROPDOWN_PATHS: PathItem[] = [
  {
    title: '계정',
    children: [
      { title: '프로필', type: 'link', icon: User, url: 'profile' },
      { title: '로그아웃', type: 'event', icon: LogOut },
    ],
  },
  {
    title: '알림',
    children: [{ title: '알림', type: 'link', icon: Bell, url: 'notification' }],
  },
  {
    title: '지원',
    children: [{ title: '문의 및 피드백', type: 'link', icon: Mail, url: 'feedback' }],
  },
];
