import { NavLink } from 'react-router';
import { ROUTER_PATH } from '@/router';
import { UserNavigation } from './user-navigation';

import { linkHandler } from '@/utils/navigation/link-handler';

const SIDEBAR_NAVIGATION_LIST = [
  {
    path: ROUTER_PATH.PRIVATE.CHILD.SCHEDULE,
    label: '일정',
  },
  {
    path: ROUTER_PATH.PRIVATE.CHILD.COMPANY,
    label: '회사',
  },
  {
    path: ROUTER_PATH.PRIVATE.CHILD.RETROSPECTIVE,
    label: '회고',
  },
];

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 w-[350px] ">
      <UserNavigation />

      <nav className="flex flex-col gap-6 pl-4">
        {SIDEBAR_NAVIGATION_LIST.map(navigation => (
          <NavLink
            key={navigation.path}
            to={navigation.path}
            className={({ isActive }) =>
              linkHandler({
                isActive,
                activeCSS: 'border-l-2 border-blue-400 pl-2  ',
                defaultCSS: 'font-semibold transition-all duration-300',
              })
            }
          >
            <span>{navigation.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
