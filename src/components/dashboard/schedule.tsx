import { HourglassNotDone } from '../icons';
import { ShadowContainer, Header } from '../ui';
import { Mode } from '../schedule';

export const Schedule = () => {
  return (
    <ShadowContainer className="flex flex-col gap-2 min-w-[450px] min-h-[100px] p-4">
      <Header
        headerTitle="다가오는 일정"
        IconComponent={HourglassNotDone}
        SideButtonComponent={Mode.Switch}
      />
    </ShadowContainer>
  );
};
