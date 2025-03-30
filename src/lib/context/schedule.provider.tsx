import { useState } from 'react';
import { ScheduleContext } from './schedule.context';

export const ScheduleProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSelected, setIsSelected] = useState<'calendar' | 'list'>('list');

  const handleSelect = (type: 'calendar' | 'list') => {
    setIsSelected(type);
  };

  return (
    <ScheduleContext.Provider value={{ isSelected, handleSelect }}>
      {children}
    </ScheduleContext.Provider>
  );
};
