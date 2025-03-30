import { createContext } from 'react';

export const ScheduleContext = createContext<{
  date: Date;
  handleDate: (date: Date) => void;
} | null>(null);
