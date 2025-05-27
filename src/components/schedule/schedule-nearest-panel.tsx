import { useNearestSchedule } from "@/hooks/schedule/useNearestSchedule";

import { formatScheduleDate } from "@/utils/time";

const ScheduleNearestPanel = () => {
  const { isLoading, nearestSchedule } = useNearestSchedule();

  if (isLoading) return <div>로딩 중...</div>;
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
