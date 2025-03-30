import { format } from 'date-fns';
import { Calendar as CalendarIcon, Plus, Send } from 'lucide-react';

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from '../shadcn-ui';
import { useCalendar } from '@/hooks/schedule';
import { cn } from '@/lib/shadcn-ui';
import { DateTimePicker } from '../ui';

export const ScheduleForm = () => {
  const { date, handleDate } = useCalendar();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <Plus />
          <span>일정 추가</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>일정 추가</DialogTitle>
          <DialogDescription>일정을 추가해주세요.</DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-2">
          <Popover>
            <div
              className={cn(
                'w-full justify-start text-left font-normal outline-1 outline-gray-300 rounded-md flex items-center text-gray-500',
                !date && 'text-muted-foreground'
              )}
            >
              <PopoverTrigger asChild className="grid grid-cols-3">
                <Button
                  variant="ghost"
                  className="flex justify-center items-center border-r-2 rounded-none"
                >
                  <CalendarIcon />
                </Button>
              </PopoverTrigger>
              <Input
                type="datetime-local"
                value={format(date, 'yyyy-MM-dd HH:mm')}
                className="cursor-pointer outline-none border-none focus-visible:ring-0 "
                onChange={e => {
                  const date = new Date(e.target.value);
                  if (!isNaN(date.getTime())) {
                    handleDate(date);
                  }
                }}
                autoFocus
              />
            </div>

            <PopoverContent className="w-auto p-1">
              <DateTimePicker date={date} onDate={handleDate} />
            </PopoverContent>
          </Popover>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Input type="text" placeholder="회사명" />
              <Input type="text" placeholder="상태" />
            </div>
            <Input type="text" placeholder="위치" />
            <Textarea placeholder="내용" />
            <Button type="submit">
              <Send />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
