import { MoreHorizontal } from 'lucide-react';

import {
  MenubarShortcut,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/shadcn';

export const ScheduleItem = () => {
  return (
    <li className="flex justify-between py-4">
      <div className="flex">
        <div className="p-1  text-sm">13:00</div>
        <div className="w-1 h-full bg-red-400 mx-4 rounded-md" />
        <div className="flex flex-col justify-center ">
          <p className="text-sm">면접</p>
          <div className="flex text-base">
            <strong className="font-normal">A 컴퍼니</strong>
            <span>-</span>
            <p>프론트엔드 개발자</p>
          </div>
          <p className="text-xs text-gray-500">서울 성동구</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <ScheduleItemMenu />
      </div>
    </li>
  );
};

const ScheduleItemMenu = () => {
  return (
    <Menubar className="bg-transparent  border-none shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <MoreHorizontal className="w-4 h-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
