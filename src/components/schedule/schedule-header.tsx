import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import { Calendar } from 'lucide-react';
import { Button } from '../shadcn';

export const ScheduleHeader = () => {
  const currentDate = format(new Date(), 'M월 d일 (E)', { locale: ko });

  return (
    <header className="flex justify-between  items-center border-b border-gray-200 p-2">
      <h3 className="text-sm font-semibold">{currentDate}</h3>

      <Button className="text-gray-500" variant="ghost" size="icon">
        <Calendar />
      </Button>
    </header>
  );
};
