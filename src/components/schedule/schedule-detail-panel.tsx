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

  return (
    <>
      <div>
        <section></section>
        <section className="flex justify-between">
          <h2 className="flex gap-5">
            <span className="flex items-center text-sm text-neutral-500">{schedule.position}</span>
            <strong className="text-[13px] flex items-center">{schedule.companyName}</strong>
          </h2>

          <MoreActions
            scheduleId={schedule.scheduleId}
            onEditClick={onEditClick}
            onClose={onClose}
          />
        </section>
        <hr className="my-5" />
        {schedule.address && (
          <div className="mt-5 text-[10px] text-neutral-500">
            {schedule.address} {schedule.addressDetail}{" "}
            <ScheduleMapRender address={schedule.address} />
          </div>
        )}

        <blockquote className="mt-3 text-[12px] pl-4 border-l-4 border-mint-500 text-sm text-gray-300 italic whitespace-pre-line">
          Memo : {schedule.memo}
        </blockquote>
      </div>
    </>
  );
};

export default ScheduleDetailPanel;
