import { useMutation } from "@tanstack/react-query";
import { createSchedule } from "@/api/schedule";
import { toDueDateISO } from "@/utils/time/dateTime";
import { toast } from "sonner";

export function useCreateSchedule(state: {
  companyName: string;
  position: string;
  memo: string;
  selectedStep: string;
  selectedDate: Date | null;
  selectedTime: string;
}) {
  const mutation = useMutation({
    mutationFn: createSchedule,
    onSuccess: () => {
      toast.success("일정이 성공적으로 추가되었습니다.");
    },
    onError: (error: Error) => {
      toast.error(error.message || "일정 추가 중 오류가 발생했습니다.");
    },
  });

  const handleSubmit = () => {
    const { selectedDate, selectedTime, companyName, position, selectedStep, memo } = state;

    const dueDate = toDueDateISO(selectedDate, selectedTime);
    if (!dueDate) {
      alert("날짜와 시간을 모두 선택해주세요.");
      return;
    }

    if (!companyName.trim() || !position.trim() || !selectedStep) {
      alert("회사명, 직무, 채용 단계를 모두 입력해주세요.");
      return;
    }

    const payload = {
      companyName,
      step: selectedStep,
      dueDate,
      position,
      memo,
    };

    mutation.mutate(payload);
  };

  return { handleSubmit, isPending: mutation.isPending };
}
