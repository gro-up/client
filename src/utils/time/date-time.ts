import { format, setHours, setMinutes, parseISO, isToday, isSameMonth } from "date-fns";
import { ko } from "date-fns/locale";

/** 사용자용 표시 포맷 */
export function formatSelectedDateTime(date: Date | null, time: string | null): string | null {
  if (!date || !time) return null;
  const [hourStr, minuteStr] = time.split(":");
  const hour = Number(hourStr);
  const minute = Number(minuteStr);
  const dateWithTime = setMinutes(setHours(date, hour), minute);
  return format(dateWithTime, "yyyy.MM.dd EEEE a HH:mm", { locale: ko });
}

/** 서버 전송용 ISO 포맷 */
export function toDueDateISO(date: Date | null, time: string | null): string | null {
  if (!date || !time) return null;
  const [hourStr, minuteStr] = time.split(":");
  const hour = Number(hourStr);
  const minute = Number(minuteStr);
  const finalDate = new Date(date);
  finalDate.setHours(hour, minute, 0, 0);
  return finalDate.toISOString();
}

export function formatScheduleDate(dueDate: string): string {
  const date = parseISO(dueDate); // "2025-05-28T08:42:00" => Date 객체

  if (isToday(date)) {
    return "오늘 일정";
  }

  const now = new Date();
  if (isSameMonth(date, now)) {
    return format(date, "d일 (EEE) 일정", { locale: ko }); // 예: 27일 (화) 일정
  }

  return format(date, "M월 d일 (EEE) 일정", { locale: ko }); // 예: 6월 27일 (화) 일정
}
