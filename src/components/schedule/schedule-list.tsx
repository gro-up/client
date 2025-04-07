import { ScheduleItem } from './schedule-item';

export const ScheduleList = () => {
  return (
    <div className="flex flex-col h-full max-h-[700px] gap-2 justify-start p-2 relative overflow-hidden">
      <strong>오늘 일정</strong>
      <ul className="flex flex-col">
        <ScheduleItem />
      </ul>

      <hr />

      <strong>내일 일정</strong>
      <ul className="flex flex-col">
        <ScheduleItem />
        <ScheduleItem />
      </ul>

      <hr />
    </div>
  );
};
