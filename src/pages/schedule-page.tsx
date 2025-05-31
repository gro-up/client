import { useState } from "react";
import { ScheduleTodayTomorrowPanel } from "@/components/schedule";

import { Container, DateTimePicker } from "@/components/ui";

import ScheduleAddPanel from "@/components/schedule/schedule-add-panel";
import ScheduleNearestPanel from "@/components/schedule/schedule-nearest-panel";
import ScheduleDetailPanel from "@/components/schedule/schedule-detail-panel";
import ScheduleEditPanel from "@/components/schedule/schedule-edit-panel";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // 날짜 선택
  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false); // 추가 패널 열림 여부
  const [editingScheduleId, setEditingScheduleId] = useState<number | null>(null); // 수정할 스케줄 ID

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

        <ScheduleTodayTomorrowPanel
          isAddPanelOpen={isAddPanelOpen}
          setIsAddPanelOpen={setIsAddPanelOpen}
          onEditClick={(id) => {
            setEditingScheduleId(id);
            setIsAddPanelOpen(false); // 동시에 추가 패널 닫기
          }}
        />
      </Container>
      <Container as="aside" className="w-6/12 p-4">
        {editingScheduleId ? (
          <ScheduleEditPanel
            scheduleId={editingScheduleId}
            onCancel={() => setEditingScheduleId(null)}
            onSubmit={() => setEditingScheduleId(null)} // 수정 완료 시 닫기
          />
        ) : isAddPanelOpen ? (
          <ScheduleAddPanel
            onEditClick={(id: number) => {
              setEditingScheduleId(id);
              setIsAddPanelOpen(false);
            }}
          />
        ) : selectedDate ? (
          <ScheduleDetailPanel
            selectedDate={selectedDate}
            onEditClick={(id) => {
              setEditingScheduleId(id);
              setIsAddPanelOpen(false);
            }}
          />
        ) : (
          <ScheduleNearestPanel />
        )}
      </Container>
    </>
  );
}
