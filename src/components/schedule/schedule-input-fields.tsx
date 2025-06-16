import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/shadcn/dropdown-menu";
import { Input } from "@/components/shadcn";
import { ChevronDown } from "lucide-react";
import { STEP_OPTIONS } from "@/constants/step";

import { useDaumPostcode } from "@/hooks/schedule";
import { useEnterToFocusNext } from "@/hooks/shared";

interface Props {
  companyName: string;
  setCompanyName: (value: string) => void;
  position: string;
  setPosition: (value: string) => void;
  step: string;
  setStep: (step: string) => void;
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
  step,
  setStep,
  setAddress,
  address,
  addressDetail,
  setAddressDetail,
}: Props) {
  const { inputRefs, handleKeyDown } = useEnterToFocusNext();
  const { handleAddressClick } = useDaumPostcode(setAddress);
  return (
    <div>
      <Input
        placeholder="회사명을 입력해주세요."
        className="w-full max-h-[50px] p-[10px] placeholder:text-white rounded-b-none"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, 0)}
        ref={(el) => {
          inputRefs.current[0] = el;
        }}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-full relative">
            <Input
              readOnly
              value={STEP_OPTIONS.find((steped) => steped.value === step)?.label || ""}
              placeholder="채용 단계를 선택해주세요."
              className="w-full max-h-[50px] p-[10px] placeholder:text-white rounded-t-none cursor-pointer"
              ref={(el) => {
                inputRefs.current[1] = el;
              }}
              onKeyDown={(e) => handleKeyDown(e, 1)}
            />
            <ChevronDown className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="end">
          {STEP_OPTIONS.map((step) => (
            <DropdownMenuItem key={step.value} onSelect={() => setStep(step.value)}>
              {step.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Input
        placeholder="직무를 입력해주세요."
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="w-full max-h-[50px] p-[10px] mt-[10px]  placeholder:text-white "
        onKeyDown={(e) => handleKeyDown(e, 2)}
        ref={(el) => {
          inputRefs.current[2] = el;
        }}
      />
      <Input
        readOnly
        placeholder="주소를 입력해주세요."
        className="w-full min-h-[50px] max-h-[50px] p-[10px] mt-[10px] rounded-b-none placeholder:text-white cursor-pointer"
        onClick={handleAddressClick}
        value={address}
        ref={(el) => {
          inputRefs.current[3] = el;
        }}
        onKeyDown={(e) => handleKeyDown(e, 3)}
      />
      {address && (
        <Input
          placeholder="나머지 주소를 입력해주세요."
          className="w-full h-[50px] p-[10px] rounded-t-none placeholder:text-white"
          value={addressDetail}
          onChange={(e) => setAddressDetail(e.target.value)}
          ref={(el) => {
            inputRefs.current[4] = el;
          }}
          onKeyDown={(e) => handleKeyDown(e, 4)}
        />
      )}
    </div>
  );
}
