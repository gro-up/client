import { useQuery } from "@tanstack/react-query";
import { getScheduleById } from "@/api/schedule";

export function useScheduleById(scheduleId: number) {
  return useQuery({
    queryKey: ["schedule", scheduleId],
    queryFn: () => getScheduleById(scheduleId),
  });
}
