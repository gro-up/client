import { createContext } from 'react';

export const ScheduleContext = createContext<{
  isSelected: 'calendar' | 'list';
  handleSelect: (type: 'calendar' | 'list') => void;
} | null>(null);
