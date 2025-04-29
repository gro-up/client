import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/shadcn/dropdown-menu";
import { Input, Button } from "@/components/shadcn";
import { CalendarPlus, ChevronDown } from "lucide-react";
import { STEP_OPTIONS } from "@/utils/map";
import dayjs from "@/utils/time/dayjs-setup";
import * as Dialog from "@radix-ui/react-dialog";
import { DaumPostcodeData } from "@/types";
interface Props {
  selectedStep: string;
  address: string;
  addressDetail: string; // 나머지 주소
  setAddress: (data: string) => void;
  setAddressDetail: (data: string) => void; //  나머지 주소 setter
  setSelectedStep: (step: string) => void;
  selectedDate: Date | null;
  selectedTime: string;
  isDateTimeConfirmed: boolean;
  onDateClick: () => void;
  onSubmit: () => void;
}

export default function ScheduleModalForm({
  selectedStep,
  setSelectedStep,
  selectedDate,
  selectedTime,
  isDateTimeConfirmed,
  onDateClick,
  onSubmit,
  setAddress,
  address,
  addressDetail,
  setAddressDetail,
}: Props) {
  const handleAddressClick = () => {
    if (!window.daum?.Postcode) {
      alert("주소 검색 기능을 사용할 수 없습니다.");
      return;
    }

    const postcode = new window.daum.Postcode({
      oncomplete: (data: DaumPostcodeData) => {
        setAddress(data.address); // 도로명 주소 또는 지번 주소
      },
    });

    postcode.open();
  };

  return (
    <div>
      <Input
        placeholder="회사명을 입력해주세요."
        className="w-full h-[50px] p-[10px] placeholder:text-white rounded-b-none"
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-full relative">
            <Input
              readOnly
              value={selectedStep}
              placeholder="채용 단계를 선택해주세요."
              className="w-full h-[50px] p-[10px] placeholder:text-white rounded-t-none cursor-pointer"
            />
            <ChevronDown className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end">
          {STEP_OPTIONS.map((step) => (
            <DropdownMenuItem key={step} onSelect={() => setSelectedStep(step)}>
              {step}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Input
        readOnly
        placeholder="주소를 입력해주세요."
        className="w-full h-[50px] p-[10px] mt-[10px] rounded-b-none placeholder:text-white cursor-pointer"
        onClick={handleAddressClick}
        value={address}
      />
      {address && (
        <Input
          placeholder="나머지 주소를 입력해주세요."
          className="w-full h-[50px] p-[10px] rounded-t-none placeholder:text-white"
          value={addressDetail}
          onChange={(e) => setAddressDetail(e.target.value)}
        />
      )}
      <div className="flex items-center gap-[10px] mt-[10px]">
        <Button onClick={onDateClick} type="button" className="rounded-[10px] cursor-pointer">
          <CalendarPlus />
        </Button>

        {isDateTimeConfirmed && selectedDate && selectedTime && (
          <p className="text-sm text-center">
            {dayjs(selectedDate)
              .hour(Number(selectedTime.split(":")[0]))
              .minute(Number(selectedTime.split(":")[1]))
              .format("YYYY.MM.DD dddd A HH:mm")}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-2 absolute bottom-0 right-0 py-[10px] px-[10px]">
        <Dialog.Close asChild>
          <Button
            size="lg"
            className="bg-neutral-900 hover:bg-neutral-700 text-white cursor-pointer"
          >
            취소
          </Button>
        </Dialog.Close>
        <Button onClick={onSubmit} type="button" variant="mint" size="lg">
          추가
        </Button>
      </div>
    </div>
  );
}
