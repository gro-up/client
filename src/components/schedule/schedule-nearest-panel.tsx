import { useScheduleList } from "@/hooks/schedule";
import { Schedule } from "@/types";
import { formatScheduleDate } from "@/utils/time";

const ScheduleNearestPanel = () => {
  const { data, isLoading } = useScheduleList();

  if (isLoading) return <div>로딩 중...</div>;
  const today = new Date();

  const nearestSchedule: Schedule = data?.data.scheduleList
    ?.filter((schedule: Schedule) => new Date(schedule.dueDate) >= today)
    .sort(
      (a: Schedule, b: Schedule) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime(),
    )[0];

  if (!nearestSchedule) return <div>일정이 없습니다.</div>;

  return (
    <section className="w-full h-full flex flex-col gap-4 justify-center items-center ">
      <header>
        <h3 className="text-2xl font-bold">가장 가까운 일정</h3>
      </header>

      <div className="flex flex-col p-5 gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold">{formatScheduleDate(nearestSchedule.dueDate)}</p>
          <div>
            <span className="text-sm font-bold text-neutral-500 mr-3">{nearestSchedule.step}</span>

            <strong>
              {nearestSchedule.companyName} - {nearestSchedule.position}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleNearestPanel;
