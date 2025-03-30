import { Calendar, List } from 'lucide-react';

import { Button } from '../shadcn-ui';
import { useSchedule } from '@/hooks/ui';

export const Switcher = () => {
  const { isSelected, handleSelect } = useSchedule();

  return (
    <div className="flex relative justify-center items-center bg-gray-200 rounded-md w-fit">
      <div
        className={`w-1/2 h-full bg-blue-500 opacity-75 rounded-md absolute top-1/2 duration-300 ease-in-out ${
          isSelected === 'list' ? 'left-0' : 'left-10'
        } -translate-y-1/2 z-10`}
      />
      <Button variant="ghost" className="relative" onClick={() => handleSelect('list')}>
        <List className={`${isSelected === 'list' ? 'text-white' : 'text-gray-500'} z-20`} />
      </Button>
      <Button variant="ghost" className="relative" onClick={() => handleSelect('calendar')}>
        <Calendar
          className={`${isSelected === 'calendar' ? 'text-white' : 'text-gray-500'} z-20`}
        />
      </Button>
    </div>
  );
};
