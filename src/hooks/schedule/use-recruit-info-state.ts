import { useState } from "react";
export function useRecruitInfoState() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [memo, setMemo] = useState("");
  const [selectedStep, setSelectedStep] = useState("");

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
    selectedStep,
    setSelectedStep,
  };
}
