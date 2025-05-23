import { useMutation } from "@tanstack/react-query";
import { createSchedule } from "@/api/schedule";
import { toDueDateISO } from "@/utils/time/dateTime";
import { toast } from "sonner";

export function useCreateSchedule({
  state,
  setters,
}: {
  state: {
    companyName: string;
    position: string;
    memo: string;
    address: string;
    addressDetail: string;
    selectedStep: string;
    selectedDate: Date | null;
    selectedTime: string;
  };
  setters: {
    setCompanyName: (v: string) => void;
    setPosition: (v: string) => void;
    setMemo: (v: string) => void;
    setAddress: (v: string) => void;
    setAddressDetail: (v: string) => void;
    setSelectedStep: (v: string) => void;
    setTempDate: (v: Date | null) => void;
    setTempTime: (v: string) => void;
    handleConfirmDateTime: (cb: () => void) => void;
  };
}) {
  const mutation = useMutation({
    mutationFn: createSchedule,
    onSuccess: () => {
      toast.success("일정이 성공적으로 추가되었습니다.");

      setters.setCompanyName("");
      setters.setPosition("");
      setters.setMemo("");
      setters.setAddress("");
      setters.setAddressDetail("");
      setters.setSelectedStep("DOCUMENT");
      setters.setTempDate(null);
      setters.setTempTime("");
      setters.handleConfirmDateTime(() => {});
    },
    onError: (error: Error) => {
      toast.error(error.message || "일정 추가 중 오류가 발생했습니다.");
    },
  });

  const handleSubmit = () => {
    const {
      selectedDate,
      selectedTime,
      companyName,
      position,
      selectedStep,
      memo,
      address,
      addressDetail,
    } = state;

    const dueDate = toDueDateISO(selectedDate, selectedTime);
    if (!dueDate) {
      alert("날짜와 시간을 모두 선택해주세요.");
      return;
    }

    if (!companyName.trim() || !position.trim() || !selectedStep) {
      alert("회사명, 직무, 채용 단계를 모두 입력해주세요.");
      return;
    }

    const companyLocation = `${address} ${addressDetail}`.trim();

    const payload = {
      companyName,
      step: selectedStep,
      dueDate,
      position,
      memo,
      companyLocation,
    };

    mutation.mutate(payload);
  };

  return { handleSubmit, isPending: mutation.isPending };
}
