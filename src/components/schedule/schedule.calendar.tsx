import { Calendar } from '@/components/shadcn-ui';
import { useSchedule } from '@/hooks/ui';

export const ScheduleCalendar = () => {
  const { date, handleDate } = useSchedule();

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={day => {
        if (day) {
          handleDate(day);
        }
      }}
      classNames={{
        months: 'w-full',
        cell: 'w-full flex justify-center items-center',
        head_cell: 'w-full',
        tbody: 'w-full ',
        day_selected: 'text-blue-500 ',
      }}
    />
  );
};
