import { ShadowContainer } from '../ui';
import { ScheduleComponents } from '../schedule';

import { ScheduleProvider } from '@/lib/context';

export const Schedule = () => {
  return (
    <>
      <ShadowContainer className="flex flex-col gap-2 w-[350px] min-h-[500px] p-4">
        <ScheduleProvider>
          <ScheduleComponents.Calendar />
          <ScheduleComponents.Table />
        </ScheduleProvider>
      </ShadowContainer>
    </>
  );
};
