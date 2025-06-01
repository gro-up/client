import { format, parseISO, addHours } from "date-fns";
import { Schedule } from "@/types";
import { MoreActions } from "../ui";

import ScheduleMapRender from "./schedule-map-render";
import { useScheduleById } from "@/hooks/schedule/use-schedule-by-id";
interface Props {
  selectedDate: Date | null;
  onEditClick: (id: number) => void;
  scheduleId: number;
  onClose: () => void;
}

const ScheduleDetailPanel = ({ onEditClick, scheduleId, onClose }: Props) => {
  const { data, isLoading } = useScheduleById(scheduleId);

  if (isLoading) return <div>로딩 중...</div>;
  if (!data) return null;

  const schedule: Schedule = data.data;
  const dueDate = parseISO(schedule.dueDate);
  const koreanTime = addHours(dueDate, 9);
  const timeStr = format(koreanTime, "HH:mm");

  return (
    <>
      <h2 className="text-lg font-bold mb-5">{format(koreanTime, "yyyy년 MM월 dd일")} 일정</h2>

      <div>
        <section className="flex justify-between">
          <div className="flex gap-5">
            <span className="flex items-center text-sm text-neutral-500">{schedule.position}</span>
            <strong className="text-[13px] flex items-center">
              {schedule.companyName} {timeStr}
            </strong>
          </div>

          <MoreActions
            scheduleId={schedule.scheduleId}
            onEditClick={onEditClick}
            onClose={onClose}
          />
        </section>

        {schedule.address && (
          <div className="mt-5 text-[10px] text-neutral-500">
            {schedule.address} {schedule.addressDetail}{" "}
            <ScheduleMapRender address={schedule.address} />
          </div>
        )}

        <blockquote className="mt-3 text-[12px] pl-4 border-l-4 border-mint-500 text-sm text-gray-300 italic whitespace-pre-line">
          Memo : {schedule.memo}
        </blockquote>

        <hr className="my-5" />
      </div>
    </>
  );
};

export default ScheduleDetailPanel;
