import { ShadowContainer } from '../ui';
import { mockData } from '../schedule/schedule.table';
import { differenceInDays } from 'date-fns';
import { HourglassNotDone } from '../icons';
import { Badge } from '../shadcn-ui';

export const DDay = () => {
  const today = new Date();

  const filteredDate = mockData.filter(item => {
    const itemDate = new Date(item.time);
    return itemDate > today;
  });

  const dDay = differenceInDays(filteredDate[0].time, today);

  return (
    <ShadowContainer className="flex flex-col gap-2 w-80 min-w-[350px]  min-h-[50px]">
      <div className="flex gap-2 w-full justify-between items-center">
        <Badge className="p-4 h-full bg-red-500 rounded-br-none rounded-tr-full">
          <HourglassNotDone className="w-5 h-5" />
          <p>D-{dDay}</p>
        </Badge>
        <div className="flex gap-2 p-4">
          <p className="text-md">{filteredDate[0]?.company}</p>
          <p className="text-md">{filteredDate[0]?.status}</p>
          <p>{filteredDate[0]?.location}</p>
        </div>
      </div>
    </ShadowContainer>
  );
};
