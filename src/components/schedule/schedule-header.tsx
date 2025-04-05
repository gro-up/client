import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const ScheduleHeader = () => {
  const currentDate = format(new Date(), 'M월 d일 (E)', { locale: ko });

  return (
    <header className="flex justify-between  items-center  w-full bg-white p-2 rounded-md">
      <h3 className="text-sm font-semibold">{currentDate}</h3>
    </header>
  );
};
