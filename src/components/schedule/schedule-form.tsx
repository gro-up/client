import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  Button,
  Input,
  Label,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn";
import { Calendar, Plus, Send, X } from "lucide-react";
import { DateTimePicker } from "../ui";
import Editor from "../editor/editor";

export const ScheduleForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="absolute bottom-0 right-0 w-full h-10 z-10">
        <Button>
          <Plus />
          <span>일정 추가</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle>일정 추가</DialogTitle>
          <DialogDescription>일정을 추가해주세요.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              회사명
            </Label>
            <Input id="name" value="회사명을 입력해주세요" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              직무
            </Label>
            <Input id="username" value="직무를 입력해주세요" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              장소
            </Label>
            <Input id="username" value="장소를 입력해주세요" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Accordion type="single" collapsible className="col-span-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex items-center gap-2">
                  <Button variant="ghost">
                    <Calendar />
                  </Button>
                  <span>일정을 선택해주세요.</span>
                </AccordionTrigger>
                <AccordionContent>
                  <DateTimePicker date={new Date()} onDate={() => {}} type="editor" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Editor inputClassName="max-h-[150px] overflow-y-auto" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">
              <X />
            </Button>
          </DialogClose>
          <Button type="submit">
            <Send />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
