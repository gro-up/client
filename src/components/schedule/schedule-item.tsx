import { MoreActions } from "../ui";
import { Schedule } from "@/types"; // 타입 정의가 있다면
import { parseISO, format } from "date-fns";
interface Props {
  schedule: Schedule;
}

export const ScheduleItem = ({ schedule }: Props) => {
  return (
    <li className="flex justify-between py-4">
      <div className="flex">
        <div className="p-1 text-sm "> {format(parseISO(schedule.dueDate), "HH:mm")}</div>
        <div className="w-1 h-full bg-red-400 mx-4 rounded-md" />
        <div className="flex flex-col justify-center">
          <p className="text-sm text-[#939292] font-normal">{schedule.step}</p>
          <p>
            {schedule.companyName} - {schedule.position}
          </p>
          <p className="text-[8px] font-normal text-[#ADADAD]">{schedule.companyLocation}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <MoreActions />
      </div>
    </li>
  );
};
