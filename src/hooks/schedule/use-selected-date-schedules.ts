import { useQuery } from "@tanstack/react-query";
import { addDays, format, parseISO } from "date-fns";
import { getSchedulesByDateRange } from "@/api/schedule";
import { Schedule } from "@/types";

import { ko } from "date-fns/locale"; //

export const useSelectedDateSchedules = (selectedDate: Date) => {
  const baseDate = selectedDate;
  const nextDate = addDays(baseDate, 1);
  const dayAfterNext = addDays(baseDate, 2); // nextDate까지 포함하는 범위

  const start = format(baseDate, "yyyyMMdd");
  const end = format(dayAfterNext, "yyyyMMdd");

  const { data, isLoading, error } = useQuery({
    queryKey: ["schedules", start, end],
    queryFn: () => getSchedulesByDateRange(start, end),
  });

  const scheduleList: Schedule[] = data?.data?.scheduleList ?? [];

  const baseDateStr = format(baseDate, "yyyyMMdd");
  const nextDateStr = format(nextDate, "yyyyMMdd");

  const baseSchedules = scheduleList.filter(
    (schedule) => format(parseISO(schedule.dueDate), "yyyyMMdd") === baseDateStr,
  );

  const nextSchedules = scheduleList.filter(
    (schedule) => format(parseISO(schedule.dueDate), "yyyyMMdd") === nextDateStr,
  );

  const baseLabel = `${format(baseDate, "M월 d일 (EEE)", { locale: ko })} 일정`;
  const nextLabel = `${format(nextDate, "M월 d일 (EEE)", { locale: ko })} 일정`;

  return {
    isLoading,
    error,
    baseSchedules,
    nextSchedules,
    allSchedules: scheduleList,
    baseLabel,
    nextLabel,
  };
};
