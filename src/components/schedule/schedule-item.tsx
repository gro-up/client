import { Schedule } from "@/types";
import { parseISO, format, addHours } from "date-fns";
interface Props {
  schedule: Schedule;

  onClick?: (id: number) => void;
}

export const ScheduleItem = ({ schedule, onClick }: Props) => {
  const koreanTime = addHours(parseISO(schedule.dueDate), 9); // UTC → KST 보정
  const timeStr = format(koreanTime, "HH:mm");
  return (
    <li
      onClick={() => onClick?.(schedule.scheduleId)}
      className="flex justify-between py-4 cursor-pointer hover:bg-gray-900 transition-colors"
    >
      <div className="flex ">
        <div className="p-1 text-sm "> {timeStr}</div>
        <div className="w-1 h-full bg-red-400 mx-4 rounded-md" />
        <div className="flex flex-col justify-center">
          <p className="text-sm text-[#939292] font-normal">{schedule.step}</p>
          <p>
            {schedule.companyName} - {schedule.position}
          </p>
          <p className="text-[8px] font-normal text-[#ADADAD]">
            {schedule.address} {schedule.addressDetail}
          </p>
        </div>
      </div>
    </li>
  );
};
