import { useState } from 'react';

export const useCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleDate = (day: Date) => setDate(day);

  return { date, handleDate, isEdit, setIsEdit };
};
