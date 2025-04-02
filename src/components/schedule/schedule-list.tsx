import { ScheduleItem } from './schedule-item';

export const ScheduleList = () => {
  return (
    <div className="pt-4">
      <div className="flex flex-col  gap-2 justify-center p-2">
        <strong>오늘</strong>
        <ul className="flex flex-col">
          <ScheduleItem />
          <ScheduleItem />
          <ScheduleItem />
        </ul>
      </div>

      <div className="flex flex-col  gap-2 justify-center bg-gray-100 p-2 rounded-md">
        <strong className="text-gray-500">내일</strong>
        <ul className="flex flex-col">
          <ScheduleItem />
          <ScheduleItem />
          <ScheduleItem />
        </ul>
      </div>
    </div>
  );
};
