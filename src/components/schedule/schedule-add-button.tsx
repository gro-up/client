import { CalendarPlus } from "lucide-react";
import { Button } from "../shadcn";

export default function ScheduleAddButton() {
  return (
    <div className="absolute p-[10px] bottom-0 right-2 text-center text-xs text-neutral-500">
      <Button variant="mint" type="button" size="lg">
        <CalendarPlus className="text-black" />
      </Button>
    </div>
  );
}
