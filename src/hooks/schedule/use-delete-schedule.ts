import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSchedule } from "@/api/schedule";
import { toast } from "sonner"; // 또는 원하는 알림 라이브러리

export const useDeleteSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (scheduleId: number) => deleteSchedule(scheduleId),
    onSuccess: () => {
      toast.success("일정이 삭제되었습니다.");

      queryClient.invalidateQueries({ queryKey: ["schedules"] });
    },
    onError: (err) => {
      if (err instanceof Error) {
        console.error("삭제 에러:", err.message);
        toast.error(err.message);
      } else {
        toast.error("알 수 없는 에러가 발생했습니다.");
      }
    },
  });
};
