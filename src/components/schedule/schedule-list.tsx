import { ScheduleItem } from "./schedule-item";

export const ScheduleList = () => {
  return (
    <div className="flex flex-col h-full max-h-[300px] gap-2 justify-start p-2 pl-3 relative overflow-y-hidden">
      <ul className="flex flex-col">
        <ScheduleItem />
      </ul>

      <hr />
    </div>
  );
};
