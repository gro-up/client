import { useState } from 'react';
import { ScheduleContext } from './schedule.context';

export const ScheduleProvider = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState<Date>(new Date());

  const handleDate = (date: Date) => {
    setDate(date);
  };

  return (
    <ScheduleContext.Provider value={{ date, handleDate }}>{children}</ScheduleContext.Provider>
  );
};
