import { ScheduleList } from '@/components/schedule';
import { DateTimePicker } from '@/components/ui';

export default function CalendarPage() {
  return (
    <>
      <div className="flex flex-col gap-2 min-w-[350px] w-full  h-full max-h-[850px] bg-white rounded-md">
        <DateTimePicker
          date={new Date()}
          onDate={() => {}}
          type="viewer"
          className={{
            caption: 'w-full font-black border-b border-gray-200 mb-2',
            month: 'w-full',
            months: 'w-full',
            cell: 'w-50 h-36',
          }}
        />
      </div>

      <div className="bg-gray-50 min-w-[350px] max-w-[400px] max-h-[850px] w-full rounded-md h-full p-3 overflow-hidden">
        <ScheduleList type="calendar" />
      </div>
    </>
  );
}
