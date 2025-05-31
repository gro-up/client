import { CalendarPlus } from "lucide-react";

import ScheduleModalDateTime from "./schedule-date-time-modal";
import {
  useDateTimePickerState,
  useDateTimeModal,
  useRecruitInfoState,
  useUpdateSchedule,
} from "@/hooks/schedule";
import { Button, Textarea } from "@/components/shadcn";
import ScheduleAddInputFields from "./schedule-input-fields";
import { formatSelectedDateTime } from "@/utils/time/date-time";

import { useEffect } from "react";
import { format, addHours } from "date-fns";
import { STEP_OPTIONS } from "@/constants/step";
import { useScheduleById } from "@/hooks/schedule/use-schedule-by-id";
import FullScreenLoader from "../ui/full-screen-loader";
interface ScheduleEditPanelProps {
  scheduleId: number;
  onCancel: () => void;
  onSubmit: () => void;
}
const ScheduleEditPanel = ({ scheduleId, onCancel, onSubmit }: ScheduleEditPanelProps) => {
  const { data } = useScheduleById(scheduleId);
  const {
    selectedDate,
    selectedTime,
    tempDate,
    setTempDate,
    tempTime,
    setTempTime,
    handleConfirmDateTime,
    setSelectedDate,
    setSelectedTime,
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
    step,
    setStep,
  } = useRecruitInfoState();

  const { isDateTimeModalOpen, openDateTimeModal, closeDateTimeModal } = useDateTimeModal({
    selectedDate,
    selectedTime,
    setTempDate,
    setTempTime,
  });

  const formattedDateTime = formatSelectedDateTime(selectedDate, selectedTime);

  const { handleUpdate, isPending } = useUpdateSchedule(scheduleId, onSubmit, {
    state: {
      companyName,
      address,
      addressDetail,
      position,
      memo,
      step,
      selectedDate,
      selectedTime,
    },
    setters: {
      setCompanyName,
      setPosition,
      setMemo,
      setAddress,
      setAddressDetail,
      setStep,
      setTempDate,
      setTempTime,
      handleConfirmDateTime,
    },
  });

  useEffect(() => {
    if (!data?.data) return;
    const schedule = data.data;

    const matchedStep = STEP_OPTIONS.find((option) => option.label === schedule.step);
    setStep(matchedStep?.value || "");
    setCompanyName(schedule.companyName);

    setPosition(schedule.position);
    setAddress(schedule.address);
    setAddressDetail(schedule.addressDetail);
    setMemo(schedule.memo);

    const parsedUTC = new Date(schedule.dueDate);
    const koreanTime = addHours(parsedUTC, 9);
    if (!isNaN(koreanTime.getTime())) {
      setSelectedDate(koreanTime);
      setSelectedTime(format(koreanTime, "HH:mm"));
    }
  }, [data]);

  return (
    <>
      {isPending && <FullScreenLoader />}
      <header className="h-10 flex items-center">일정 수정</header>
      <div className="flex flex-col gap-2.5 h-full w-full ">
        <form className="flex flex-col gap-2.5 h-full">
          <ScheduleAddInputFields
            companyName={companyName}
            setCompanyName={setCompanyName}
            position={position}
            setPosition={setPosition}
            step={step}
            setStep={setStep}
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
            {formattedDateTime && <p className="text-sm text-center">{formattedDateTime}</p>}
          </div>

          {/* 마크다운 노트 입력 */}
          <Textarea
            className="w-full h-[163px]"
            placeholder="메모를 작성하세요 "
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />

          {/* 수정 버튼 영역 */}
          <div className="flex justify-end gap-2 absolute bottom-0 right-0 py-[10px] px-[10px]">
            <Button
              onClick={onCancel}
              size="lg"
              className="bg-neutral-900 hover:bg-neutral-700 text-white cursor-pointer"
              type="button"
            >
              취소
            </Button>
            <Button onClick={handleUpdate} type="submit" variant="mint" size="lg">
              수정
            </Button>
          </div>
        </form>
      </div>

      {/* 날짜 선택 모달창 */}
      <ScheduleModalDateTime
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
};

export default ScheduleEditPanel;
