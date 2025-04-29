import { MoreHorizontal } from "lucide-react";

export const PastScheduleListItem = () => {
  return (
    <li className="flex justify-between items-center h-16 border-b border-neutral-700 p-2">
      <div>
        <span className="text-sm font-semibold mr-3 text-neutral-500">면접</span>

        <strong>A 컴퍼니 - 프론트엔드 개발자</strong>
      </div>

      <MoreHorizontal className="size-4 text-neutral-500" />
    </li>
  );
};
