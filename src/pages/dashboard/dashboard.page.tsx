import { DDay } from '@/components/dashboard/d-day';
import { Question } from '@/components/dashboard/question';
import { Schedule } from '@/components/dashboard/schedule';

import { UserMenu } from '@/components/ui';

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full justify-start items-center">
      <UserMenu />

      <Question />
      <DDay />
      <Schedule />
    </div>
  );
};

export default DashboardPage;
