import { useState } from "react";
export function useRecruitInfoState() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [memo, setMemo] = useState("");
  const [step, setStep] = useState("");

  return {
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
  };
}
