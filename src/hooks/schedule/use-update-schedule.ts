import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSchedule } from "@/api/schedule";
import { toDueDateISO } from "@/utils/time/date-time";
import { toast } from "sonner";
import { ScheduleUpdatePayload } from "@/types";

export function useUpdateSchedule(
  scheduleId: number,
  onSubmit: () => void,
  {
    state,
    setters,
  }: {
    state: {
      companyName: string;
      position: string;
      memo: string;
      address: string;
      addressDetail: string;
      step: string;
      selectedDate: Date | null;
      selectedTime: string;
    };
    setters: {
      setCompanyName: (v: string) => void;
      setPosition: (v: string) => void;
      setMemo: (v: string) => void;
      setAddress: (v: string) => void;
      setAddressDetail: (v: string) => void;
      setStep: (v: string) => void;
      setTempDate: (v: Date | null) => void;
      setTempTime: (v: string) => void;
      handleConfirmDateTime: (cb: () => void) => void;
    };
    onSuccess?: () => void; // 수정 후 닫기 등 외부 동작
  },
) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: ScheduleUpdatePayload) => updateSchedule(scheduleId, payload),
    onSuccess: () => {
      toast.success("일정이 수정되었습니다.");
      setters.setCompanyName("");
      setters.setPosition("");
      setters.setMemo("");
      setters.setAddress("");
      setters.setAddressDetail("");
      setters.setStep("");
      setters.setTempDate(null);
      setters.setTempTime("");
      setters.handleConfirmDateTime(() => {});
      // 쿼리 무효화 (상세/리스트 둘 다)
      queryClient.invalidateQueries({ queryKey: ["schedules"] });
      queryClient.invalidateQueries({ queryKey: ["schedule", scheduleId] });
      onSubmit();
    },
    onError: (err: Error) => {
      toast.error(err.message || "일정 수정 중 오류가 발생했습니다.");
    },
  });

  const handleUpdate = () => {
    const {
      selectedDate,
      selectedTime,
      companyName,
      position,
      step,
      memo,
      address,
      addressDetail,
    } = state;

    const dueDate = toDueDateISO(selectedDate, selectedTime);
    if (!dueDate) {
      alert("날짜와 시간을 모두 선택해주세요.");
      return;
    }

    if (!companyName.trim() || !position.trim() || !step) {
      alert("회사명, 직무, 채용 단계를 모두 입력해주세요.");
      return;
    }

    const payload = {
      companyName,
      step,
      dueDate,
      position,
      memo,
      address,
      addressDetail,
    };

    mutation.mutate(payload);
  };

  return { handleUpdate, isPending: mutation.isPending };
}
