import { HourglassNotDone } from '../icons';
import { ShadowContainer, Header } from '../ui';
import { ScheduleComponents } from '../schedule';
import { useSchedule } from '@/hooks/ui';

export const Schedule = () => {
  const { isSelected } = useSchedule();

  return (
    <>
      <ShadowContainer className="flex flex-col gap-2 min-w-[450px] min-h-[100px] p-4">
        <Header headerTitle="다가오는 일정" IconComponent={HourglassNotDone}>
          <ScheduleComponents.Switcher />
        </Header>
        <hr className="my-3" />
        <>
          {isSelected === 'calendar' && <ScheduleComponents.Table />}
          {isSelected === 'list' && <ScheduleComponents.Table />}
        </>
      </ShadowContainer>
    </>
  );
};
