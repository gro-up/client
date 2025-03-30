import { Question } from '@/components/dashboard/question';
import { Schedule } from '@/components/dashboard/schedule';

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
        <Question />
        <Schedule />
      </div>
    </div>
  );
};

export default DashboardPage;
