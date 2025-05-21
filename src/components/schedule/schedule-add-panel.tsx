import { CalendarPlus } from "lucide-react";

import ScheduleDateTimeModal from "./schedule-date-time-modal";
import {
  useDateTimePickerState,
  useDateTimeModal,
  useRecruitInfoState,
  useCreateSchedule,
} from "@/hooks/schedule";
import { Button, Textarea } from "@/components/shadcn";
import ScheduleAddInputFields from "./schedule-add-input-fields";
import { formatSelectedDateTime } from "@/utils/time/dateTime";
import ScheduleCardSlider from "./schedule-card-slider";

export default function ScheduleAddPanel() {
  const {
    selectedDate,
    selectedTime,
    isDateTimeConfirmed,
    tempDate,
    setTempDate,
    tempTime,
    setTempTime,
    handleConfirmDateTime,
  } = useDateTimePickerState();
  const {
    companyName,
    setCompanyName,
    position,
    setPosition,
    address,
    setAddress,
    addressDetail,
    setAddressDetail,
    memo,
    setMemo,
    selectedStep,
    setSelectedStep,
  } = useRecruitInfoState();
  const { isDateTimeModalOpen, openDateTimeModal, closeDateTimeModal } = useDateTimeModal({
    selectedDate,
    selectedTime,
    setTempDate,
    setTempTime,
  });

  const formattedDateTime = formatSelectedDateTime(selectedDate, selectedTime);

  const { handleSubmit } = useCreateSchedule({
    companyName,
    position,
    memo,
    selectedStep,
    selectedDate,
    selectedTime,
  });

  return (
    <>
      <div className="flex flex-col gap-2.5 h-full w-full ">
        <ScheduleCardSlider />

        {/* 폼 전체 */}
        <form className="flex flex-col gap-2.5 h-full">
          <ScheduleAddInputFields
            companyName={companyName}
            setCompanyName={setCompanyName}
            position={position}
            setPosition={setPosition}
            selectedStep={selectedStep}
            setSelectedStep={setSelectedStep}
            address={address}
            setAddress={setAddress}
            addressDetail={addressDetail}
            setAddressDetail={setAddressDetail}
          />

          {/* 날짜 확인 영역 */}
          <div className="flex items-center p-2.5 gap-[10px]">
            <Button
              onClick={openDateTimeModal}
              type="button"
              className="rounded-[10px] cursor-pointer"
            >
              <CalendarPlus />
            </Button>
            {isDateTimeConfirmed && formattedDateTime && (
              <p className="text-sm text-center">{formattedDateTime}</p>
            )}
          </div>

          {/* 마크다운 노트 입력 */}
          <Textarea
            className="w-full h-[163px]"
            placeholder="메모를 작성하세요 "
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />

          {/* 제출 버튼 영역 */}
          <div className="flex justify-end gap-2 absolute bottom-0 right-0 py-[10px] px-[10px]">
            <Button
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-700 text-white cursor-pointer"
              type="button"
            >
              취소
            </Button>
            <Button onClick={handleSubmit} type="button" variant="mint" size="lg">
              추가
            </Button>
          </div>
        </form>
      </div>

      {/* 날짜 선택 모달창 */}
      <ScheduleDateTimeModal
        open={isDateTimeModalOpen}
        onClose={closeDateTimeModal}
        tempDate={tempDate}
        tempTime={tempTime}
        setTempDate={setTempDate}
        setTempTime={setTempTime}
        onConfirm={() => handleConfirmDateTime(() => closeDateTimeModal())}
      />
    </>
  );
}
