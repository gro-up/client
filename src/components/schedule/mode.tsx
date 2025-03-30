import { useState } from 'react';
import { Calendar, List } from 'lucide-react';

import { Button } from '../shadcn-ui';

export const Mode = () => {
  return <div></div>;
};

const Switch = () => {
  const [isSelected, setIsSelected] = useState<'calendar' | 'list'>('list');

  const handleClick = (type: 'calendar' | 'list') => {
    setIsSelected(type);
  };

  return (
    <div className="flex relative justify-center items-center bg-gray-200 rounded-md w-fit">
      <div
        className={`w-1/2 h-full bg-blue-500 opacity-75 rounded-md absolute top-1/2 duration-300 ease-in-out ${
          isSelected === 'list' ? 'left-0' : 'left-10'
        } -translate-y-1/2 z-10`}
      />
      <Button variant="ghost" className="relative" onClick={() => handleClick('list')}>
        <List className={`${isSelected === 'list' ? 'text-white' : 'text-gray-500'} z-20`} />
      </Button>
      <Button variant="ghost" className="relative" onClick={() => handleClick('calendar')}>
        <Calendar
          className={`${isSelected === 'calendar' ? 'text-white' : 'text-gray-500'} z-20`}
        />
      </Button>
    </div>
  );
};

Mode.Switch = Switch;
