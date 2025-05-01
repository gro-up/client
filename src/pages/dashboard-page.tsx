import { useState } from "react";
import { ScheduleHeader, ScheduleList } from "@/components/schedule";
import { Container, DateTimePicker } from "@/components/ui";

import ScheduleModal from "@/components/schedule/schedule-modal";

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <>
      <Container as="main" className="w-6/12 p-4 bg-neutral-900">
        <DateTimePicker
          date={selectedDate}
          onDate={(newDate) => {
            setSelectedDate(newDate); // 날짜 상태 업데이트
          }}
        />

        <hr />
        <ScheduleHeader />
        <ScheduleList />
        <ScheduleModal />
      </Container>
      <Container as="aside" className="w-6/12 p-4"></Container>
    </>
  );
}
