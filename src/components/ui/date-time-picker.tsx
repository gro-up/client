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
  type?: 'today_viewer' | 'calendar_viewer' | 'editor';
  className?: DateTimePickerClassNames;
}

export const DateTimePicker = ({
  date,
  onDate,
  type = 'today_viewer',
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
          head: `w-full ${className?.head}`,
          cell: `w-15 h-15 ${className?.cell} first:text-red-500 last:text-red-500`,
          day_selected: `bg-gray-200 rounded-md ${className?.day_selected}`,
          day_today: `bg-gray-900 rounded-md ${className?.day_today}  text-white `,
          day: `w-full h-full flex flex-col items-center justify-start ${className?.day} border border-gray-100`,
        }}
        onSelect={day => {
          if (day) {
            onDate(day);
          }
        }}
        components={{
          DayContent: props => {
            return (
              <>
                <div {...props} className="text-sm p-2">
                  {format(props.date, 'dd')}
                </div>
                <ul className="text-sm text-white  w-full">
                  {props.date === date && <li className="bg-red-500 h-2 w-2" />}
                </ul>
              </>
            );
          },
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
