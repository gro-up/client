import { DDay } from '@/components/dashboard/d-day';
import { Question } from '@/components/dashboard/question';
import { Schedule } from '@/components/dashboard/schedule';

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full justify-start items-center">
      <Question />

      <DDay />

      <Schedule />
    </div>
  );
};

export default DashboardPage;
