import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/shadcn/dropdown-menu";
import { Input } from "@/components/shadcn";
import { ChevronDown } from "lucide-react";
import { STEP_OPTIONS } from "@/constants/step";

import { DaumPostcodeData } from "@/types";

interface Props {
  companyName: string;
  setCompanyName: (value: string) => void;
  position: string;
  setPosition: (value: string) => void;
  selectedStep: string;
  setSelectedStep: (step: string) => void;
  address: string;
  setAddress: (value: string) => void;
  addressDetail: string;
  setAddressDetail: (value: string) => void;
}

export default function ScheduleAddInputFields({
  companyName,
  setCompanyName,
  position,
  setPosition,
  selectedStep,
  setSelectedStep,
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
        setAddress(data.address);
      },
    });

    postcode.open();
  };

  return (
    <div>
      <Input
        placeholder="회사명을 입력해주세요."
        className="w-full h-[50px] p-[10px] placeholder:text-white rounded-b-none"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-full relative">
            <Input
              readOnly
              value={STEP_OPTIONS.find((step) => step.value === selectedStep)?.label || ""}
              placeholder="채용 단계를 선택해주세요."
              className="w-full h-[50px] p-[10px] placeholder:text-white rounded-t-none cursor-pointer"
            />
            <ChevronDown className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end">
          {STEP_OPTIONS.map((step) => (
            <DropdownMenuItem key={step.value} onSelect={() => setSelectedStep(step.value)}>
              {step.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Input
        placeholder="직무를 입력해주세요."
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full h-[50px] p-[10px] mt-[10px]  placeholder:text-white "
      />
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
    </div>
  );
}
