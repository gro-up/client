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
import { deleteSchedule } from "@/api/schedule";
import { toast } from "sonner";
interface MoreActionsProps {
  scheduleId: number;
}

export const MoreActions = ({ scheduleId }: MoreActionsProps) => {
  const handleDelete = async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteSchedule(scheduleId);
      toast.success("일정이 삭제되었습니다.");
    } catch (err) {
      if (err instanceof Error) {
        console.error("에러 메시지:", err.message);
        toast.error(err.message);
      } else {
        console.error("알 수 없는 에러 발생");
        toast.error("알 수 없는 에러 발생");
      }
    }
  };
  return (
    <Menubar className="bg-transparent border-none shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <MoreHorizontal className="w-4 h-4" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
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
          <MenubarItem onClick={handleDelete}>
            <Trash className="w-4 h-4 text-red-500" />
            삭제
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
