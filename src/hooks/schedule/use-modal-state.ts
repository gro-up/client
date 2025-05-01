import { useState } from "react";

export function useModalState() {
  const [open, setOpen] = useState(false);
  const [subModalOpen, setSubModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState("");
  return {
    open,
    setOpen,
    subModalOpen,
    setSubModalOpen,
    selectedStep,
    setSelectedStep,
  };
}
