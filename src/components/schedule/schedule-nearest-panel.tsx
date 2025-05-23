import { useScheduleList } from "@/hooks/schedule";
import { format } from "date-fns";

const ScheduleNearestPanel = () => {
  const { data, isLoading } = useScheduleList();

  if (isLoading) return <div>로딩 중...</div>;

  const nearestSchedule = data?.scheduleList
    ?.slice()
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())[0];
  console.log(nearestSchedule);
  if (!nearestSchedule) return <div>일정이 없습니다.</div>;

  return (
    <div className="w-full h-full justify-center items-center flex flex-col gap-2 p-4 border rounded-xl">
      <h2 className="text-lg font-bold">가장 가까운 일정</h2>
      <div className="text-center">
        <p className="text-sm font-semibold">{nearestSchedule.companyName}</p>
        <p className="text-sm">{nearestSchedule.position}</p>
        <p className="text-xs text-gray-500">
          {format(new Date(nearestSchedule.dueDate), "yyyy-MM-dd HH:mm")}
        </p>
      </div>
    </div>
  );
};

export default ScheduleNearestPanel;
