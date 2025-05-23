import { Carousel, CarouselContent, CarouselItem } from "@/components/shadcn";
import { PastScheduleCarouselItem } from "./past-schedule-carousel-item";
import { useScheduleList } from "@/hooks/schedule";
import { Schedule } from "@/types";
import { isBefore, parseISO, compareDesc } from "date-fns";
export const PastSchedule = () => {
  const { data, isLoading } = useScheduleList();
  if (isLoading) return <div>로딩 중...</div>;

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
                key={schedule._id}
                step={schedule.step}
                companyName={schedule.companyName}
                position={schedule.position}
                companyLocation={schedule.companyLocation}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
