import { getSchedules } from "@/api/schedule";
import { useQuery } from "@tanstack/react-query";

export function useScheduleList() {
  return useQuery({
    queryKey: ["schedules"],
    queryFn: getSchedules,
  });
}
