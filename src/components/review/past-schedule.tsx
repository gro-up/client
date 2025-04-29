import { Carousel, CarouselContent, CarouselItem } from "@/components/shadcn";
import { PastScheduleItem } from "./past-schedule-item";

export const PastSchedule = () => {
  return (
    <section>
      <header>
        <h2>지난 일정</h2>
      </header>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <PastScheduleItem key={1} />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <PastScheduleItem key={2} />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <PastScheduleItem key={3} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};
