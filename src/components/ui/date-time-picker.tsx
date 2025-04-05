import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import { Input } from '../shadcn';
import { format } from 'date-fns';

interface DateTimePickerProps {
  date: Date;
  onDate: (day: Date) => void;
  type?: 'viewer' | 'editor';
}

export const DateTimePicker = ({ date, onDate, type = 'viewer' }: DateTimePickerProps) => {
  return (
    <>
      <DayPicker
        locale={ko}
        mode="single"
        selected={date}
        classNames={{
          month: 'w-full',
          months: 'w-full',
          caption: 'relative h-10 flex items-center justify-start pl-5',
          nav_button_next: 'absolute bg-transparent top-1/2 -translate-y-1/2 right-5 text-gray-400',
          nav_button_previous:
            'absolute bg-transparent top-1/2 -translate-y-1/2 right-15 text-gray-400',
          head: 'w-full text-center',
          cell: 'w-15 text-center',
          day_selected: 'text-blue-500',
          day_today: 'bg-blue-100 rounded-full',
          day: 'p-3',
        }}
        onSelect={day => {
          if (day) {
            onDate(day);
          }
        }}
      />
      {type === 'editor' && (
        <Input
          type="time"
          value={format(date, 'HH:mm')}
          onChange={e => {
            const time = new Date(date.getTime());
            time.setHours(Number(e.target.value.split(':')[0]));
            time.setMinutes(Number(e.target.value.split(':')[1]));
            onDate(time);
          }}
        />
      )}
    </>
  );
};
