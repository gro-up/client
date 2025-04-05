import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import { Input } from '../shadcn';
import { format } from 'date-fns';

interface DateTimePickerClassNames {
  month?: string;
  months?: string;
  caption?: string;
  nav_button_next?: string;
  nav_button_previous?: string;
  head?: string;
  cell?: string;
  day_selected?: string;
  day_today?: string;
  day?: string;
}

interface DateTimePickerProps {
  date: Date;
  onDate: (day: Date) => void;
  type?: 'viewer' | 'editor';
  className?: DateTimePickerClassNames;
}

export const DateTimePicker = ({
  date,
  onDate,
  type = 'viewer',
  className,
}: DateTimePickerProps) => {
  return (
    <>
      <DayPicker
        locale={ko}
        mode="single"
        selected={date}
        classNames={{
          month: `w-full ${className?.month} `,
          months: `w-full ${className?.months}`,
          caption: `relative h-10 flex items-center justify-start pl-5 ${className?.caption}`,
          nav_button_next: `absolute bg-transparent top-1/2 -translate-y-1/2 right-5 text-gray-400 ${className?.nav_button_next}`,
          nav_button_previous: `absolute bg-transparent top-1/2 -translate-y-1/2 right-15 text-gray-400 ${className?.nav_button_previous}`,
          head: `w-full text-center ${className?.head}`,
          cell: `w-15 text-center ${className?.cell}`,
          day_selected: `text-blue-500 ${className?.day_selected}`,
          day_today: `bg-blue-100 rounded-full ${className?.day_today}`,
          day: `p-3 ${className?.day}`,
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
