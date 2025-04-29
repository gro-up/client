import { MoreHorizontal } from "lucide-react";

export const PastScheduleCarouselItem = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold">면접</span>

        <MoreHorizontal className="size-4 text-neutral-500" />
      </div>

      <strong>A 컴퍼니 - 프론트엔드 개발자</strong>

      <p className="text-xs text-neutral-500">서울 성동구 연무장17길 10</p>
    </div>
  );
};
