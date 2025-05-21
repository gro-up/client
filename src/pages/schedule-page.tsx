import { useState } from "react";
import { ScheduleHeader, ScheduleList } from "@/components/schedule";

import { Container, DateTimePicker } from "@/components/ui";

import ScheduleAddButton from "@/components/schedule/schedule-add-button";
import ScheduleAddPanel from "@/components/schedule/schedule-add-panel";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // 선택된 날짜
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(true); //
  return (
    <>
      <Container as="main" className="w-6/12 p-4  bg-neutral-900">
        <DateTimePicker
          date={selectedDate}
          onDate={(newDate) => {
            setSelectedDate(newDate); // 날짜 상태 업데이트
          }}
        />
        <ScheduleHeader />
        <ScheduleList />
        <ScheduleAddButton onClick={() => setIsAddPanelOpen(true)} />
      </Container>
      {isAddPanelOpen && (
        <Container as="aside" className="w-6/12 p-4">
          <ScheduleAddPanel />
        </Container>
      )}
    </>
  );
}
