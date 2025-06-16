import { useState } from "react";
import { ScheduleSelectedDatePanel } from "@/components/schedule";

import { Container, DateTimePicker } from "@/components/ui";

import ScheduleAddPanel from "@/components/schedule/schedule-add-panel";
import ScheduleNearestPanel from "@/components/schedule/schedule-nearest-panel";
import ScheduleDetailPanel from "@/components/schedule/schedule-detail-panel";
import ScheduleEditPanel from "@/components/schedule/schedule-edit-panel";
import { useIsMobile } from "@/hooks/shadcn";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const [isAddPanelOpen, setIsAddPanelOpen] = useState(false); // 추가 패널 열림 여부
  const [editingScheduleId, setEditingScheduleId] = useState<number | null>(null); // 수정할 스케줄 ID
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const shouldShowMainContent =
    !isMobile || (!editingScheduleId && !isAddPanelOpen && !selectedScheduleId);

  return (
    <>
      <Container as="main" className="w-full h-full lg:w-6/12 p-4 bg-neutral-900 flex flex-col">
        {shouldShowMainContent ? (
          <div className="flex flex-col h-full items-center sm:items-center lg:items-start  lg:justify-start gap-4 w-full">
            <DateTimePicker
              date={selectedDate}
              onDate={(newDate) => {
                setSelectedDate(newDate);
                setIsAddPanelOpen(false);
                setEditingScheduleId(null);
              }}
            />
            <ScheduleSelectedDatePanel
              isAddPanelOpen={isAddPanelOpen}
              setIsAddPanelOpen={setIsAddPanelOpen}
              setEditingScheduleId={setEditingScheduleId}
              onSelectSchedule={(id) => {
                setSelectedScheduleId(id);
                setIsAddPanelOpen(false);
                setEditingScheduleId(null);
              }}
              date={selectedDate}
            />
          </div>
        ) : (
          <>
            {editingScheduleId && (
              <ScheduleEditPanel
                scheduleId={editingScheduleId}
                onClose={() => setEditingScheduleId(null)}
                onSubmit={() => setEditingScheduleId(null)}
              />
            )}
            {!editingScheduleId && isAddPanelOpen && (
              <ScheduleAddPanel
                onEditClick={(id: number) => {
                  setEditingScheduleId(id);
                  setIsAddPanelOpen(false);
                }}
                onClose={() => setIsAddPanelOpen(false)}
              />
            )}
            {!editingScheduleId && !isAddPanelOpen && selectedScheduleId && (
              <ScheduleDetailPanel
                selectedDate={selectedDate}
                scheduleId={selectedScheduleId}
                onEditClick={(id) => {
                  setEditingScheduleId(id);
                  setSelectedScheduleId(null);
                }}
                onClose={() => setSelectedScheduleId(null)}
              />
            )}
          </>
        )}
      </Container>

      {/* 사이드 패널은 lg 이상에서만 보여주기 */}
      <Container as="aside" className="w-full lg:w-6/12 p-4 bg-neutral-900 hidden lg:block">
        {editingScheduleId && (
          <ScheduleEditPanel
            scheduleId={editingScheduleId}
            onClose={() => setEditingScheduleId(null)}
            onSubmit={() => setEditingScheduleId(null)}
          />
        )}
        {!editingScheduleId && isAddPanelOpen && (
          <ScheduleAddPanel
            onEditClick={(id: number) => {
              setEditingScheduleId(id);
              setIsAddPanelOpen(false);
            }}
            onClose={() => setIsAddPanelOpen(false)}
          />
        )}
        {!editingScheduleId && !isAddPanelOpen && selectedScheduleId && (
          <ScheduleDetailPanel
            selectedDate={selectedDate}
            scheduleId={selectedScheduleId}
            onEditClick={(id) => {
              setEditingScheduleId(id);
              setSelectedScheduleId(null);
            }}
            onClose={() => setSelectedScheduleId(null)}
          />
        )}
        {!editingScheduleId && !isAddPanelOpen && !selectedScheduleId && <ScheduleNearestPanel />}
      </Container>
    </>
  );
}
