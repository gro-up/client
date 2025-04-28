import { MoreActions } from "../ui";

export const ScheduleItem = () => {
  return (
    <li className="flex justify-between py-4">
      <div className="flex">
        <div className="p-1  text-sm">13:00</div>
        <div className="w-1 h-full bg-red-400 mx-4 rounded-md" />
        <div className="flex flex-col justify-center ">
          <p className="text-sm">면접</p>
          <p>A 컴퍼니 - 프론트엔드 개발자</p>
          <p className="text-xs text-gray-500">서울 성동구</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <MoreActions />
      </div>
    </li>
  );
};
