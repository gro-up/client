import { getSchedules } from "@/api/schedule";
import { useQuery } from "@tanstack/react-query";
import { useCookies } from "../auth";

export function useScheduleList() {
  const { cookies } = useCookies();
  const token = cookies["on-step-token"];

  return useQuery({
    queryKey: ["schedules"],
    queryFn: getSchedules,
    enabled: !!token, //토큰 있을 때만 실행
  });
}
