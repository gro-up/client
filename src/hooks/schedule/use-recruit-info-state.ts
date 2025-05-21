import { useState } from "react";
export function useRecruitInfoState() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [note, setNote] = useState("");
  const [selectedStep, setSelectedStep] = useState("");

  return {
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
  };
}
