import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/shadcn-ui';
import { useSchedule } from '@/hooks/ui';
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
    time: new Date(2025, 3, 1, 10, 0),
    company: 'C 컴퍼니',
    status: '면접',
    location: '서울 성동구',
  },
];

export const ScheduleTable = () => {
  const { date } = useSchedule();

  return (
    <>
      {mockData.filter(item => item.time.getDate() === date.getDate()).length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">시간</TableHead>
              <TableHead>회사</TableHead>
              <TableHead>상태</TableHead>
              <TableHead className="text-right">장소</TableHead>
            </TableRow>
          </TableHeader>
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
        <Table>
          <TableCaption className="text-center">
            <p>일정이 없습니다.</p>
          </TableCaption>
        </Table>
      )}
    </>
  );
};
