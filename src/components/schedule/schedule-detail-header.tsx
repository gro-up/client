import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/shadcn";
import { MoreActions } from "../ui";

export const ScheduleDetailHeader = () => {
  return (
    <header className="flex justify-between items-center font-bold border-b border-gray-200  p-2">
      <h4>A 컴퍼니 - 프론트엔드 개발자</h4>

      <nav className="flex items-center">
        <Button variant="ghost" size="icon">
          <ChevronUp />
        </Button>
        <Button variant="ghost" size="icon">
          <ChevronDown />
        </Button>

        <MoreActions />
      </nav>
    </header>
  );
};
