import { useScheduleList } from "@/hooks/schedule";
import { format, isSameDay, parseISO } from "date-fns";
import { Schedule } from "@/types";
import { MoreActions } from "../ui";

import ScheduleMapRender from "./schedule-map-render";
interface Props {
  selectedDate: Date;
}

const ScheduleDetailPanel = ({ selectedDate }: Props) => {
  const { data, isLoading } = useScheduleList();

  if (isLoading) return <div>로딩 중...</div>;
  if (!data) return null;

  const schedules = data.data.scheduleList.filter((schedule: Schedule) =>
    isSameDay(parseISO(schedule.dueDate), selectedDate),
  );

  if (schedules.length === 0) {
    return (
      <div>
        <p className="text-lg font-bold">{format(selectedDate, "yyyy년 MM월 dd일")} 일정</p>
        <p className="text-sm text-gray-400 mt-2">일정이 없습니다.</p>
      </div>
    );
  }

  return (
    <>
      {schedules.map((s: Schedule) => (
        <div key={s.scheduleId}>
          <section className="flex justify-between">
            <div className="flex gap-5">
              <span className="flex items-center text-sm text-neutral-500">{s.position}</span>
              <strong className="text-[13px] flex items-center">{s.companyName}</strong>
            </div>
            <MoreActions scheduleId={s.scheduleId} />
          </section>
          {s.companyLocation && (
            <div className="mt-5 text-[10px] text-neutral-500">
              {s.companyLocation} <ScheduleMapRender address={s.companyLocation} />
            </div>
          )}

          <blockquote className="mt-3 text-[12px] pl-4 border-l-4 border-mint-500 text-sm text-gray-300 italic whitespace-pre-line">
            Memo : {s.memo}
          </blockquote>
          <hr className="my-5" />
        </div>
      ))}
    </>
  );
};

export default ScheduleDetailPanel;
