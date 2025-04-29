import { Carousel, CarouselContent, CarouselItem } from "@/components/shadcn";
import { PastScheduleCarouselItem } from "./past-schedule-carousel-item";

export const PastSchedule = () => {
  return (
    <section>
      <header>
        <h2>지난 일정</h2>
      </header>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <PastScheduleCarouselItem key={1} />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <PastScheduleCarouselItem key={2} />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <PastScheduleCarouselItem key={3} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};
