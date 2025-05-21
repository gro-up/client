import { useState, useCallback } from "react";

interface Props {
  selectedDate: Date | null;
  selectedTime: string;
  setTempDate: (date: Date) => void;
  setTempTime: (time: string) => void;
}
export function useDateTimeModal({ selectedDate, selectedTime, setTempDate, setTempTime }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    const now = new Date();
    setTempDate(selectedDate ?? now);
    setTempTime(selectedTime || now.toTimeString().slice(0, 5));
    setIsOpen(true);
  }, [selectedDate, selectedTime, setTempDate, setTempTime]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isDateTimeModalOpen: isOpen,
    openDateTimeModal: open,
    closeDateTimeModal: close,
  };
}
