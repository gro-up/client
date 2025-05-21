import { useState } from "react";

export function useDateTimeModalState() {
  const [isDateTimeModalOpen, setIsDateTimeModalOpen] = useState(false);

  return {
    isDateTimeModalOpen,
    setIsDateTimeModalOpen,
  };
}
