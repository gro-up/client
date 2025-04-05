import { NavLink } from 'react-router';
import { SIDEBAR_PATHS } from '@/utils/navigation';
import { UserNavigation } from './user-navigation';

import { linkHandler } from '@/utils/navigation/link-handler';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 w-[350px] max-h-[776px] h-full p-4">
      <UserNavigation />

      <nav className="flex flex-col gap-6 pl-4">
        {SIDEBAR_PATHS.map(navigation => (
          <NavLink
            key={navigation.to}
            to={navigation.to ?? ''}
            className={({ isActive }) =>
              linkHandler({
                isActive,
                activeCSS: 'border-l-2 border-blue-400 pl-2  ',
                defaultCSS: 'font-semibold transition-all duration-300',
              })
            }
          >
            <span>{navigation.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
