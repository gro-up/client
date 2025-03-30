import { Question } from '@/components/dashboard/question';
import { Schedule } from '@/components/dashboard/schedule';

import { ScheduleProvider } from '@/lib/context';

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-4 w-full h-full justify-center items-center">
        <Question />

        <ScheduleProvider>
          <Schedule />
        </ScheduleProvider>
      </div>
    </div>
  );
};

export default DashboardPage;
