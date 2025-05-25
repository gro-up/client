import { ScheduleItem } from "./schedule-item";

import { useTodayTomorrowSchedules } from "@/hooks/schedule";

export const ScheduleList = () => {
  const { isLoading, todaySchedules, tomorrowSchedules, todayLabel, tomorrowLabel } =
    useTodayTomorrowSchedules();

  if (isLoading) return <div>로딩중...</div>;
  return (
    <div className="flex flex-col gap-6 p-2 pl-3">
      {/* 오늘 일정 */}
      <div>
        <p className="text-sm font-bold mb-2">{todayLabel}</p>
        <ul className="flex flex-col gap-2">
          {todaySchedules.length > 0 ? (
            todaySchedules.map((item) => <ScheduleItem key={item._id} schedule={item} />)
          ) : (
            <p className="text-xs text-gray-500">오늘 일정이 없습니다.</p>
          )}
        </ul>
      </div>
      <div className="w-full h-[1px] bg-[#585050]"></div>
      {/* 내일 일정 */}
      <div>
        <p className="text-sm font-bold mb-2">{tomorrowLabel}</p>
        <ul className="flex flex-col gap-2">
          {tomorrowSchedules.length > 0 ? (
            tomorrowSchedules.map((item) => <ScheduleItem key={item._id} schedule={item} />)
          ) : (
            <p className="text-xs text-gray-500">내일 일정이 없습니다.</p>
          )}
        </ul>
      </div>
    </div>
  );
};
