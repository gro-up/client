import Editor from "../editor/editor";
import { ScheduleDetailMap } from "./schedule-detail-map";

export function ScheduleDetailContent() {
  return (
    <div className="flex flex-col gap-2">
      <ScheduleDetailMap />
      <Editor />
    </div>
  );
}
