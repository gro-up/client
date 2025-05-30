import { CalendarPlus } from "lucide-react";
import { Button } from "../shadcn";

import { ScheduleItem } from "./schedule-item";

import { useTodayTomorrowSchedules } from "@/hooks/schedule";
interface Props {
  setIsAddPanelOpen: (value: boolean) => void;
  isAddPanelOpen: boolean;
  onEditClick: (id: number) => void;
}
export const ScheduleTodayTomorrowPanel = ({
  setIsAddPanelOpen,
  isAddPanelOpen,
  onEditClick,
}: Props) => {
  const { isLoading, todaySchedules, tomorrowSchedules, todayLabel, tomorrowLabel } =
    useTodayTomorrowSchedules();

  if (isLoading) return <div>로딩중...</div>;
  return (
    <div className="flex flex-col gap-6 p-3 pl-3 flex-1 overflow-y-auto ">
      {/* 오늘 일정 */}
      <div>
        <p className="text-sm font-bold mb-2">{todayLabel}</p>
        <ul className="flex flex-col gap-2">
          {todaySchedules.length > 0 ? (
            todaySchedules.map((item) => (
              <ScheduleItem key={item.scheduleId} schedule={item} onEditClick={onEditClick} />
            ))
          ) : (
            <p className="text-xs text-gray-500">오늘 일정이 없습니다.</p>
          )}
        </ul>
      </div>
      <hr />
      {/* 내일 일정 */}
      <div>
        <p className="text-sm font-bold mb-2">{tomorrowLabel}</p>
        <ul className="flex flex-col gap-2">
          {tomorrowSchedules.length > 0 ? (
            tomorrowSchedules.map((item) => (
              <ScheduleItem key={item.scheduleId} schedule={item} onEditClick={onEditClick} />
            ))
          ) : (
            <p className="text-xs text-gray-500">내일 일정이 없습니다.</p>
          )}
        </ul>
      </div>
      <hr />
      {/* 스케쥴 추가 버튼 */}
      <div className="flex justify-end">
        <Button
          className="cursor-pointer text-black"
          variant="mint"
          type="button"
          size="lg"
          onClick={() => setIsAddPanelOpen(!isAddPanelOpen)}
        >
          <CalendarPlus />
        </Button>
      </div>
    </div>
  );
};
