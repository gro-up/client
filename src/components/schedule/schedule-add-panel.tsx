import { format, setHours, setMinutes } from "date-fns";
import { ko } from "date-fns/locale";
import { CalendarPlus } from "lucide-react";

import ScheduleDateTimeModal from "./schedule-date-time-modal";
import {
  useDateTimePickerState,
  useDateTimeModalState,
  useRecruitInfoState,
} from "@/hooks/schedule";
import { Button, Textarea } from "@/components/shadcn";
import ScheduleAddInputFields from "./schedule-add-input-fields";

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
    jobTitle,
    setJobTitle,
    address,
    setAddress,
    addressDetail,
    setAddressDetail,
    note,
    setNote,
    selectedStep,
    setSelectedStep,
  } = useRecruitInfoState();
  const { isDateTimeModalOpen, setIsDateTimeModalOpen } = useDateTimeModalState();

  const formattedDateTime = (() => {
    if (!selectedDate || !selectedTime) return null;
    const [hourStr, minuteStr] = selectedTime.split(":");
    const hour = Number(hourStr);
    const minute = Number(minuteStr);
    const dateWithTime = setMinutes(setHours(selectedDate, hour), minute);
    return format(dateWithTime, "yyyy.MM.dd EEEE a HH:mm", { locale: ko });
  })();

  const handleDateClick = () => {
    setTempDate(selectedDate ?? new Date());
    setTempTime(selectedTime || new Date().toTimeString().slice(0, 5));
    setIsDateTimeModalOpen(true);
  };

  const handleSubmit = () => {
    const payload = {
      step: selectedStep,
      address,
      addressDetail,
      date: selectedDate,
      time: selectedTime,
      note,
    };

    console.log("📝 제출됨:", payload);
  };

  return (
    <>
      <div className="flex flex-col gap-2.5 h-full ">
        {/* 헤더 */}
        <div className="flex flex-col py-[10px]">
          <div>면접</div>
          <div>A컴퍼니 프론트엔드 개발자</div>
          <div>서울 성동구</div>
        </div>

        {/* 폼 전체 */}
        <form className="flex flex-col gap-2.5 h-full">
          <ScheduleAddInputFields
            companyName={companyName}
            setCompanyName={setCompanyName}
            jobTitle={jobTitle}
            setJobTitle={setJobTitle}
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
              onClick={handleDateClick}
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
            className=" w-full h-[163px]"
            placeholder="메모를 작성하세요 "
            value={note}
            onChange={(e) => setNote(e.target.value)}
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
        onClose={() => setIsDateTimeModalOpen(false)}
        tempDate={tempDate}
        tempTime={tempTime}
        setTempDate={setTempDate}
        setTempTime={setTempTime}
        onConfirm={() => handleConfirmDateTime(() => setIsDateTimeModalOpen(false))}
      />
    </>
  );
}
