import { ScheduleItem } from './schedule-item';

interface ScheduleListProps {
  type?: 'today' | 'calendar';
}

export const ScheduleList = ({ type = 'today' }: ScheduleListProps) => {
  return (
    <div className="flex flex-col h-full gap-2 justify-start p-2 relative">
      {type === 'today' && (
        <>
          <strong>현재 일정</strong>
          <ul className="flex flex-col">
            <ScheduleItem />
          </ul>

          <hr />

          <strong>다음 일정</strong>
          <ul className="flex flex-col">
            <ScheduleItem />
            <ScheduleItem />
            <ScheduleItem />
          </ul>
        </>
      )}

      {type === 'calendar' && (
        <>
          <strong>오늘 일정</strong>
          <ul className="flex flex-col">
            <ScheduleItem />
          </ul>

          <hr />

          <strong>지난 일정</strong>
          <ul className="flex flex-col">
            <ScheduleItem />
          </ul>

          <hr />

          <strong>관심 기업</strong>
          <ul className="flex flex-col">
            <ScheduleItem />
          </ul>
        </>
      )}
    </div>
  );
};
