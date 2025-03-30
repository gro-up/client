import { Table, TableBody, TableCell, TableRow } from '@/components/shadcn-ui';
import { useSchedule } from '@/hooks/schedule';

import { ScheduleForm } from './schedule.form';
import { format } from 'date-fns';

export const mockData = [
  {
    time: new Date(2025, 2, 20, 10, 0),
    company: 'F 컴퍼니',
    status: '면접',
    location: '서울 성동구',
  },
  {
    time: new Date(2025, 2, 30, 23, 0),
    company: 'A 컴퍼니',
    status: '면접',
    location: '서울 성동구',
  },
  {
    time: new Date(2025, 2, 30, 23, 0),
    company: 'K 컴퍼니',
    status: '면접',
    location: '서울 성동구',
  },
  {
    time: new Date(2025, 3, 1, 10, 0),
    company: 'C 컴퍼니',
    status: '면접',
    location: '서울 성동구',
  },
];

export const ScheduleTable = () => {
  const { date } = useSchedule();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center items-center border-t border-gray-200" />
      {mockData.filter(item => item.time.getDate() === date.getDate()).length > 0 ? (
        <Table>
          <TableBody>
            {mockData
              .filter(item => item.time.getDate() === date.getDate())
              .map(item => (
                <TableRow key={`${item.company} ${item.location}`}>
                  <TableCell className="font-medium">{format(item.time, 'HH:mm')}</TableCell>
                  <TableCell>{item.company}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell className="text-right">{item.location}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      ) : (
        <div className="text-center text-gray-500 w-full h-[50px] flex justify-center items-center">
          <p>일정이 없습니다.</p>
        </div>
      )}

      <ScheduleForm />
    </div>
  );
};
