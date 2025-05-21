import { format, setHours, setMinutes } from "date-fns";
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
