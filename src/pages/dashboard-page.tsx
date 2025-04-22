import { ScheduleHeader, ScheduleList } from '@/components/schedule';
import { Container, DateTimePicker } from '@/components/ui';

export default function DashboardPage() {
  return (
    <>
      <Container as="main" className="w-6/12 p-4 bg-neutral-900">
        <DateTimePicker date={new Date()} onDate={() => {}} />

        <hr />
        <ScheduleHeader />
        <ScheduleList />
      </Container>
      <Container as="aside" className="w-6/12 p-4"></Container>
    </>
  );
}
