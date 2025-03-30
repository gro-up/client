import { Header, ShadowContainer } from '../ui';
import { ScheduleComponents } from '../schedule';

import { ScheduleProvider } from '@/lib/context';
import { Calendar } from 'lucide-react';

export const Schedule = () => {
  return (
    <>
      <ShadowContainer className="flex flex-col gap-2 w-80 min-w-[350px] min-h-[500px] p-4">
        <Header headerTitle="일정" IconComponent={Calendar} className="text-gray-500" />
        <ScheduleProvider>
          <ScheduleComponents.Calendar />
          <ScheduleComponents.Table />
        </ScheduleProvider>
      </ShadowContainer>
    </>
  );
};
