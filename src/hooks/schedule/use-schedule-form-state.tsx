import { useState } from "react";

export function useScheduleFormState() {
  const [open, setOpen] = useState(false);
  const [subModalOpen, setSubModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isDateTimeConfirmed, setIsDateTimeConfirmed] = useState(false);

  const [tempDate, setTempDate] = useState<Date | null>(null);
  const [tempTime, setTempTime] = useState("");

  const handleConfirmDateTime = () => {
    if (!tempDate || !tempTime) return;

    const [hours, minutes] = tempTime.split(":").map(Number);
    const combinedDate = new Date(tempDate);
    combinedDate.setHours(hours);
    combinedDate.setMinutes(minutes);
    combinedDate.setSeconds(0);

    setSelectedDate(combinedDate);
    setSelectedTime(tempTime);
    setIsDateTimeConfirmed(true);
    setSubModalOpen(false);
  };

  return {
    selectedStep,
    setSelectedStep,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    isDateTimeConfirmed,
    setIsDateTimeConfirmed,
    tempDate,
    setTempDate,
    tempTime,
    setTempTime,
    handleConfirmDateTime,
    open,
    setOpen,
    subModalOpen,
    setSubModalOpen,
  };
}
