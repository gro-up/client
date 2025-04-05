import { ScheduleItem } from './schedule-item';

export const ScheduleList = () => {
  return (
    <div className="flex flex-col  gap-2 justify-center p-2">
      <strong>현재 일정</strong>
      <ul className="flex flex-col">
        <ScheduleItem />
      </ul>

      <strong>다음 일정</strong>
      <ul className="flex flex-col">
        <ScheduleItem />
        <ScheduleItem />
        <ScheduleItem />
      </ul>
    </div>
  );
};
