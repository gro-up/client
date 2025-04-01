import { Hourglass, Plus } from 'lucide-react';
import { differenceInDays } from 'date-fns';
import { ShadowContainer } from '../ui';
import { mockData } from '../schedule/schedule.table';

import { Badge, Button } from '../shadcn-ui';

export const DDay = () => {
  const today = new Date();

  const filteredDate = mockData.filter(item => {
    const itemDate = new Date(item?.time);
    return itemDate > today;
  });

  const dDay = differenceInDays(filteredDate[0]?.time, today);

  return (
    <>
      <ShadowContainer className="flex flex-col gap-2 w-80 min-w-[350px]  min-h-[50px]">
        <div className="flex gap-2 w-full justify-between items-center ">
          <Badge className="p-4 h-full bg-blue-400 rounded-br-none rounded-tr-full ">
            <Hourglass className="w-5 h-5 ml-4 fill-white" />
            <p>D-{filteredDate.length > 0 ? dDay : 0}</p>
          </Badge>
          {filteredDate.length > 0 ? (
            <div className="flex gap-2 p-4">
              <p className="text-md">{filteredDate[0]?.company}</p>
              <p className="text-md">{filteredDate[0]?.status}</p>
              <p>{filteredDate[0]?.location}</p>
            </div>
          ) : (
            <Button variant="outline" className="flex justify-center items-center">
              <Plus className="w-5 h-5 ml-4 fill-white" />
            </Button>
          )}
        </div>
      </ShadowContainer>
    </>
  );
};
