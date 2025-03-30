import { ShadowContainer } from '../ui';
import { ScheduleComponents } from '../schedule';

import { ScheduleProvider } from '@/lib/context';

export const Schedule = () => {
  return (
    <>
      <ShadowContainer className="flex flex-col gap-2 min-w-[450px] min-h-[100px] p-4">
        <ScheduleProvider>
          <ScheduleComponents.Calendar />
          <ScheduleComponents.Table />
        </ScheduleProvider>
      </ShadowContainer>
    </>
  );
};
