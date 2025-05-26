import { Carousel, CarouselContent, CarouselItem } from "@/components/shadcn";
import { PastScheduleCarouselItem } from "./past-schedule-carousel-item";
import { useScheduleList } from "@/hooks/schedule";
import { Schedule } from "@/types";
import { isBefore, parseISO, compareDesc } from "date-fns";
interface Props {
  onEditClick: (id: number) => void;
}
export const PastSchedule = ({ onEditClick }: Props) => {
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
      <header className="mb-5">
        <h2>지난 일정</h2>
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
