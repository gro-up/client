import {
  ScheduleHeader,
  ScheduleList,
  ScheduleDetailContent,
  ScheduleDetailHeader,
} from '@/components/schedule';

export default function SchedulePage() {
  return (
    <>
      <div className="bg-gray-50 w-[350px] rounded-md h-full max-h-[776px] p-3">
        <ScheduleHeader />
        <ScheduleList />
      </div>

      <main className="bg-gray-50 w-[540px] rounded-md h-full max-h-[776px] p-3">
        <ScheduleDetailHeader />
        <ScheduleDetailContent />
      </main>
    </>
  );
}
