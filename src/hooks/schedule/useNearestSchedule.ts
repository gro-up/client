import { useScheduleList } from "./use-schedule-list";
import { Schedule } from "@/types";

export function useNearestSchedule() {
  const { data, isLoading } = useScheduleList();

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0); // 오늘 자정 기준

  const nearestSchedule: Schedule | undefined = data?.data.scheduleList
    ?.filter((schedule: Schedule) => new Date(schedule.dueDate) >= todayStart)
    .sort(
      (a: Schedule, b: Schedule) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
    )[0];

  return { isLoading, nearestSchedule };
}
