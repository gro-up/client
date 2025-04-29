import { CalendarPlus } from "lucide-react";
import { Button } from "../shadcn";
interface ScheduleAddButtonProps {
  onClick: () => void;
}
export default function ScheduleAddButton({ onClick }: ScheduleAddButtonProps) {
  return (
    <div className="absolute p-[10px] bottom-0 right-2 text-center text-xs text-neutral-500">
      <Button onClick={onClick} variant="mint" type="button" size="lg">
        <CalendarPlus className="text-black" />
      </Button>
    </div>
  );
}
