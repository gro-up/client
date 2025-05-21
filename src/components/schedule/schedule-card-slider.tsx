import { useScheduleList } from "@/hooks/schedule";
import ScheduleCard from "./schedule-card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { Schedule } from "@/types";
export default function ScheduleCardSlider() {
  const { data, isLoading } = useScheduleList();

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div className="w-full">
      <p className="p-2.5 text-xs font-bold">지난일정</p>

      <Swiper spaceBetween={0} slidesPerView={2.5}>
        {data.data.scheduleList.map((schedule: Schedule) => (
          <SwiperSlide>
            <ScheduleCard
              key={schedule._id}
              step={schedule.step}
              companyName={schedule.companyName}
              position={schedule.position}
              address={schedule.address}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
