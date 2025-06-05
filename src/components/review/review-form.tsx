import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  Textarea,
} from "@/components/shadcn";
import { ListPlus } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shadcn";
import { useScheduleList } from "@/hooks/schedule";
// import Editor from "../editor/editor";
import { useCreateReview } from "@/hooks/review/use-create-review";
import { useState } from "react";

interface Schedule {
  scheduleId: number;
  companyId: number;
  companyName: string;
  address: string;
  addressDetail: string;
  step: string;
  position: string;
  memo: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export const ReviewForm = () => {
  const [scheduleId, setScheduleId] = useState<string>("");
  const [reviewContentState, setReviewContentState] = useState("");

  const { isOpen, setIsOpen, handleCreateCompany } = useCreateReview(
    scheduleId,
    reviewContentState,
  );

  const { data: schedules } = useScheduleList();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="mint"
          type="button"
          size="lg"
          className="text-black absolute bottom-5 right-5"
        >
          <ListPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-900">
        <DialogHeader>
          <DialogTitle>관심기업 추가</DialogTitle>
          <DialogDescription>관심기업의 채용사이트를 추가해주세요.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreateCompany}>
          <div className="grid py-4">
            <div className="grid-cols-4 items-center gap-4 mb-5">
              <Select value={scheduleId} onValueChange={setScheduleId}>
                <SelectTrigger className="outline-1 w-full p-2 rounded-md">
                  <SelectValue placeholder="지난 일정을 선택해주세요." />
                </SelectTrigger>
                <SelectContent className="bg-white text-black ">
                  {schedules?.data.scheduleList.map((schedule: Schedule) => (
                    <SelectItem
                      className="hover:bg-neutral-200"
                      key={`schedule-${schedule.scheduleId}`}
                      value={String(schedule.scheduleId)}
                    >
                      {schedule.companyName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid-cols-4 items-center gap-4 mb-5">
              <Textarea
                className="outline-1 w-full rounded-md "
                value={reviewContentState}
                onChange={(e) => setReviewContentState(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">취소</Button>
            </DialogClose>
            <Button
              type="submit"
              variant="mint"
              className="text-black disabled:bg-neutral-500"
              disabled={!scheduleId || !reviewContentState}
            >
              추가하기
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
