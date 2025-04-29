// components/schedule/ScheduleModal.tsx
import * as Dialog from "@radix-ui/react-dialog";
import ScheduleAddButton from "@/components/schedule/schedule-add-button";

import ScheduleDateTimeModal from "./schedule-date-time-modal";
import ScheduleModalForm from "./schedule-modal-form";
import { useScheduleFormState } from "@/hooks/schedule";

export default function ScheduleModal() {
  const {
    selectedStep,
    setSelectedStep,
    selectedDate,
    selectedTime,
    isDateTimeConfirmed,
    tempDate,
    setTempDate,
    tempTime,
    setTempTime,
    handleConfirmDateTime,
    open,
    setOpen,
    subModalOpen,
    setSubModalOpen,
  } = useScheduleFormState();

  return (
    <>
      <ScheduleAddButton onClick={() => setOpen(true)} />

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 \
                       bg-neutral-900 py-[10px] px-[30px] rounded-md shadow-lg w-[600px] h-[500px] text-white"
          >
            <div className="p-[10px] flex flex-col gap-[10px] h-full relative">
              <Dialog.Title className="text-lg font-bold mb-2">지난 일정</Dialog.Title>

              <div className="flex flex-col py-[10px]">
                <div>면접</div>
                <div>A컴퍼니 프론트엔드 개발자</div>
                <div>서울 성동구</div>
              </div>

              <form className="flex flex-col gap-[10px]">
                <ScheduleModalForm
                  selectedStep={selectedStep}
                  setSelectedStep={setSelectedStep}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  isDateTimeConfirmed={isDateTimeConfirmed}
                  onDateClick={() => {
                    setTempDate(selectedDate ?? new Date());
                    setTempTime(selectedTime || new Date().toTimeString().slice(0, 5));
                    setSubModalOpen(true);
                  }}
                  onSubmit={() => {
                    console.log("추가 버튼 클릭됨");
                  }}
                />
              </form>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <ScheduleDateTimeModal
        open={subModalOpen}
        onClose={() => setSubModalOpen(false)}
        tempDate={tempDate}
        tempTime={tempTime}
        setTempDate={setTempDate}
        setTempTime={setTempTime}
        onConfirm={handleConfirmDateTime}
      />
    </>
  );
}
