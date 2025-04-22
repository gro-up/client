import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export const ScheduleHeader = () => {
  const currentDate = format(new Date(), 'd일 (E)', { locale: ko });

  return (
    <header className="flex justify-between  items-center  w-full p-2 rounded-md">
      <div className="pl-2">
        <h3 className="font-black">{currentDate}</h3>
        <strong>오늘 일정</strong>
      </div>
    </header>
  );
};
