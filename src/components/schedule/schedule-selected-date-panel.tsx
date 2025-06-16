import { CalendarPlus } from "lucide-react";
import { Button } from "../shadcn";

import { ScheduleItem } from "./schedule-item";

import { useSelectedDateSchedules } from "@/hooks/schedule";
interface Props {
  setIsAddPanelOpen: (value: boolean) => void;
  isAddPanelOpen: boolean;

  date: Date;
  onSelectSchedule: (id: number) => void;
  setEditingScheduleId: (value: null | number) => void;
}
export const ScheduleSelectedDatePanel = ({
  setIsAddPanelOpen,
  isAddPanelOpen,
  setEditingScheduleId,
  date,
  onSelectSchedule,
}: Props) => {
  const { isLoading, baseSchedules, nextSchedules, baseLabel, nextLabel } =
    useSelectedDateSchedules(date);
  if (isLoading) return <div>로딩중...</div>;

  return (
    <div className="flex w-full max-w-[448px]  lg:w-full flex-col gap-6 p-3 pl-3 flex-1 overflow-y-auto ">
      {/* 선택된날 일정 */}
      <div>
        <p className="text-sm font-bold mb-2">{baseLabel}</p>
        <ul className="flex flex-col gap-2 ">
          {baseSchedules.length > 0 ? (
            baseSchedules.map((item) => (
              <ScheduleItem
                key={item.scheduleId}
                schedule={item}
                onClick={() => onSelectSchedule(item.scheduleId)}
              />
            ))
          ) : (
            <p className="text-xs text-gray-500">일정이 없습니다.</p>
          )}
        </ul>
      </div>
      <hr />
      {/* 다음날 일정*/}
      <div>
        <p className="text-sm font-bold mb-2">{nextLabel}</p>
        <ul className="flex flex-col gap-2">
          {nextSchedules.length > 0 ? (
            nextSchedules.map((item) => (
              <ScheduleItem
                key={item.scheduleId}
                schedule={item}
                onClick={() => onSelectSchedule(item.scheduleId)}
              />
            ))
          ) : (
            <p className="text-xs text-gray-500">일정이 없습니다.</p>
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
          onClick={() => {
            setIsAddPanelOpen(!isAddPanelOpen);
            setEditingScheduleId(null);
          }}
        >
          <CalendarPlus />
        </Button>
      </div>
    </div>
  );
};
