import {
  ScheduleHeader,
  ScheduleList,
  ScheduleDetailContent,
  ScheduleDetailHeader,
} from '@/components/schedule';

export default function TodayPage() {
  return (
    <>
      <div className="flex flex-col gap-2 min-w-[350px] w-full  h-full">
        <ScheduleHeader />
        <main className="bg-gray-50 rounded-md p-3 min-h-[776px] h-full">
          <ScheduleDetailHeader />
          <ScheduleDetailContent />
        </main>
      </div>

      <div className="bg-gray-50 min-w-[350px] max-w-[400px] w-full rounded-md h-full p-3">
        <ScheduleList />
      </div>
    </>
  );
}
