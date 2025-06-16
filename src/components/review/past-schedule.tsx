import { Carousel, CarouselContent, CarouselItem } from "@/components/shadcn";
import { PastScheduleCarouselItem } from "./past-schedule-carousel-item";
import { useScheduleList } from "@/hooks/schedule";
import { Schedule } from "@/types";
import { isBefore, parseISO, compareDesc } from "date-fns";
import { ArrowLeft } from "lucide-react";
interface Props {
  onEditClick: (id: number) => void;
  onClose: () => void;
}
export const PastSchedule = ({ onEditClick, onClose }: Props) => {
  const { data, isLoading } = useScheduleList();
  if (isLoading || !data || !data.data) return <div>로딩 중...</div>;

  const now = new Date();

  // 지난 일정만 필터링하고 최신 날짜부터 정렬
  const pastSchedules = data.data.scheduleList
    .filter((schedule: Schedule) => {
      return isBefore(parseISO(schedule.dueDate), now);
    })
    .sort((a: Schedule, b: Schedule) => {
      return compareDesc(parseISO(a.dueDate), parseISO(b.dueDate));
    });

  return (
    <section>
      <header className="h-10 flex items-center gap-2 mb-2 lg:mb-0 lg:gap-0">
        <button onClick={onClose} className="lg:hidden cursor-pointer">
          <ArrowLeft />
        </button>
        <span>일정 추가</span>
      </header>
      <Carousel>
        <CarouselContent>
          {pastSchedules.map((schedule: Schedule) => (
            <CarouselItem className="basis-1/3">
              <PastScheduleCarouselItem
                key={schedule.scheduleId}
                step={schedule.step}
                companyName={schedule.companyName}
                position={schedule.position}
                address={schedule.address}
                addressDetail={schedule.addressDetail}
                scheduleId={schedule.scheduleId}
                onEditClick={onEditClick}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
