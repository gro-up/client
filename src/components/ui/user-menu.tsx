import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  Avatar,
  AvatarImage,
  DropdownMenuContent,
  Button,
} from '@/components/shadcn-ui';

import { DROPDOWN_PATHS } from './paths';
import { useLogout } from '@/hooks/auth/use-logout';
import { useProfile } from '@/hooks/auth/use-profile';

export const UserMenu = () => {
  const { photo, displayName } = useProfile();

  return (
    <div className="flex w-80 min-w-[350px] justify-end ">
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="cursor-pointer hover:bg-transparent focus:border-transparent focus:focus:ring-0"
        >
          <Button variant="ghost">
            <Avatar>
              <AvatarImage src={photo || undefined} />
            </Avatar>
            <span>{displayName || '사용자'}</span>

            <ChevronDown className="ml-auto" />
          </Button>
        </DropdownMenuTrigger>
        <UserMenu.Content />
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

UserMenu.Content = Content;
