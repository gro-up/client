import { useQuery } from "@tanstack/react-query";
import { addDays, format, parseISO } from "date-fns";
import { getSchedulesByDateRange } from "@/api/schedule";
import { Schedule } from "@/types";
import { useCookies } from "../auth";
import { ko } from "date-fns/locale"; //
/**
 * 오늘과 내일의 일정을 가져오는 커스텀 훅
 */
export const useTodayTomorrowSchedules = () => {
  const { cookies } = useCookies();
  const token = cookies["on-step-token"];
  // 날짜 기준 생성: today, tomorrow, 모레
  const today = new Date();
  const tomorrow = addDays(today, 1);
  const dayAfterTomorrow = addDays(today, 2); // end는 "내일 일정까지 포함"을 위한 날짜

  // API 요청용 날짜 포맷 (yyyyMMdd)
  const start = format(today, "yyyyMMdd");
  const end = format(dayAfterTomorrow, "yyyyMMdd"); // 모레까지 범위를 줘야 내일까지 포함됨

  // 일정 조회 API 호출
  const { data, isLoading, error } = useQuery({
    queryKey: ["schedules", start, end],
    queryFn: () => getSchedulesByDateRange(start, end),

    enabled: !!token,
  });

  // 일정 목록 추출 (undefined 방지용 fallback)
  const scheduleList: Schedule[] = data?.data?.scheduleList ?? [];

  // 오늘/내일 날짜 문자열
  const todayStr = format(today, "yyyyMMdd");
  const tomorrowStr = format(tomorrow, "yyyyMMdd");

  // 오늘 일정 필터링
  const todaySchedules = scheduleList.filter(
    (schedule) => format(parseISO(schedule.dueDate), "yyyyMMdd") === todayStr,
  );

  // 내일 일정 필터링
  const tomorrowSchedules = scheduleList.filter(
    (schedule) => format(parseISO(schedule.dueDate), "yyyyMMdd") === tomorrowStr,
  );
  //  날짜 헤더용 라벨
  const todayLabel = `${format(today, "d일 (EEE)", { locale: ko })} 오늘 일정`;
  const tomorrowLabel = `${format(tomorrow, "d일 (EEE)", { locale: ko })} 내일 일정`;
  return {
    isLoading, // 로딩 상태
    error, // 에러 정보
    todaySchedules, // 오늘 일정만 필터링된 목록
    tomorrowSchedules, // 내일 일정만 필터링된 목록
    allSchedules: scheduleList, // 전체 일정 (today ~ tomorrow 범위 내)
    todayLabel,
    tomorrowLabel,
  };
};
