import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  Avatar,
  AvatarImage,
  DropdownMenuContent,
  Button,
} from '@/components/shadcn';

import { DROPDOWN_PATHS } from '@/utils/navigation/paths';
import { useLogout, useProfile } from '@/hooks/auth';

export const UserNavigation = () => {
  const { profile } = useProfile();

  return (
    <div className="w-full ">
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="cursor-pointer hover:bg-transparent focus:border-transparent focus:focus:ring-0"
        >
          <Button variant="ghost" className="w-full">
            <Avatar className="w-12 h-12 mr-3">
              <AvatarImage src={profile.photo || undefined} />
            </Avatar>

            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-1 text-left">
                <span className="text-sm">{profile.displayName || '사용자'}</span>
                <span className="text-xs text-gray-500">{profile.email}</span>
              </div>

              <ChevronDown />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <UserNavigation.Content />
      </DropdownMenu>
    </div>
  );
};

const Content = () => {
  const { logoutHandler } = useLogout();
  return (
    <DropdownMenuContent>
      <div className="flex flex-col gap-2">
        {DROPDOWN_PATHS.map(path => (
          <div key={path.title}>
            <p className="flex items-center gap-2 text-sm ps-1">{path.title}</p>
            <hr />
            <div>
              {path.children && (
                <>
                  {path.children.map(child => (
                    <div key={child.title} className="list-none cursor-pointer">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span className="flex justify-center items-center w-5 h-5 ms-1 my-2">
                          {child.icon && <child.icon />}
                        </span>
                        {child.type === 'event' ? (
                          <span onClick={logoutHandler}>{child.title}</span>
                        ) : (
                          <Link to={child.url ?? ''}>{child.title}</Link>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </DropdownMenuContent>
  );
};

UserNavigation.Content = Content;
