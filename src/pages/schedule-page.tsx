import { useState } from "react";
import { ScheduleSelectedDatePanel } from "@/components/schedule";

import { Container, DateTimePicker } from "@/components/ui";

import ScheduleAddPanel from "@/components/schedule/schedule-add-panel";
import ScheduleNearestPanel from "@/components/schedule/schedule-nearest-panel";
import ScheduleDetailPanel from "@/components/schedule/schedule-detail-panel";
import ScheduleEditPanel from "@/components/schedule/schedule-edit-panel";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); // 날짜 선택
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false); // 추가 패널 열림 여부
  const [editingScheduleId, setEditingScheduleId] = useState<number | null>(null); // 수정할 스케줄 ID
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);

  return (
    <>
      <Container as="main" className="w-6/12 p-4  bg-neutral-900 flex flex-col">
        <DateTimePicker
          date={selectedDate}
          onDate={(newDate) => {
            setSelectedDate(newDate); // 날짜 상태 업데이트
            setIsAddPanelOpen(false);
            setEditingScheduleId(null);
          }}
        />
        {selectedDate && (
          <ScheduleSelectedDatePanel
            isAddPanelOpen={isAddPanelOpen}
            setIsAddPanelOpen={setIsAddPanelOpen}
            onSelectSchedule={(id) => {
              setSelectedScheduleId(id);
              setIsAddPanelOpen(false);
              setEditingScheduleId(null);
            }}
            date={selectedDate} // 선택된날짜
          />
        )}
      </Container>
      <Container as="aside" className="w-6/12 p-4">
        {editingScheduleId ? (
          <ScheduleEditPanel
            scheduleId={editingScheduleId}
            onCancel={() => setEditingScheduleId(null)}
            onSubmit={() => setEditingScheduleId(null)}
          />
        ) : isAddPanelOpen ? (
          <ScheduleAddPanel
            onEditClick={(id: number) => {
              setEditingScheduleId(id);
              setIsAddPanelOpen(false);
            }}
          />
        ) : selectedScheduleId ? (
          <ScheduleDetailPanel
            selectedDate={selectedDate}
            scheduleId={selectedScheduleId}
            onEditClick={(id) => {
              setEditingScheduleId(id);
              setSelectedScheduleId(null);
            }}
            onClose={() => setSelectedScheduleId(null)}
          />
        ) : (
          <ScheduleNearestPanel />
        )}
      </Container>
    </>
  );
}
