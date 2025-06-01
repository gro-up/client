import {
  MoreHorizontal,
  MapPin,
  Calendar,
  Trash,
  Edit,
  Tag,
  Link,
  MessageCircle,
} from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/shadcn";

import { useDeleteSchedule } from "@/hooks/schedule/use-delete-schedule";
interface MoreActionsProps {
  scheduleId: number;
  onEditClick: (id: number) => void;
  onClose: () => void;
}

export const MoreActions = ({ scheduleId, onEditClick, onClose }: MoreActionsProps) => {
  const { mutate: deleteScheduleMutate } = useDeleteSchedule();
  const handleDelete = () => {
    // 일정삭제함수
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    deleteScheduleMutate(scheduleId);
  };
  return (
    <Menubar className="bg-transparent border-none shadow-none ">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <MoreHorizontal className="w-4 h-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem
            onClick={() => {
              onEditClick(scheduleId);
            }}
          >
            <Edit className="w-4 h-4 text-gray-400" />
            편집
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gray-400" />
              상태
            </MenubarSubTrigger>
            <MenubarSubContent>
              <input type="text" />
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              날짜
            </MenubarSubTrigger>
            <MenubarSubContent>
              <input type="text" />
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger className="flex items-center gap-2">
              <MapPin className="w-4 h-4  text-gray-400" />
              위치
            </MenubarSubTrigger>
            <MenubarSubContent>
              <input type="text" />
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />

          <MenubarItem disabled>공유</MenubarItem>

          <MenubarItem>
            <Link className="w-4 h-4 text-gray-400" />
            링크 복사
          </MenubarItem>
          <MenubarItem>
            <MessageCircle className="w-4 h-4 text-gray-400" />
            카카오톡 공유하기
          </MenubarItem>

          <MenubarSeparator />
          <MenubarItem
            onClick={() => {
              handleDelete();
              onClose();
            }}
          >
            <Trash className="w-4 h-4 text-red-500" />
            삭제
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
