// types/schedule.ts
export interface Schedule {
  scheduleId: number;
  companyName: string;
  position: string;
  step: string;

  dueDate: string;
  address: string;
  addressDetail: string;
  memo: string;
}

export interface ScheduleUpdatePayload {
  companyName: string;
  step: string;
  dueDate: string;
  position: string;
  memo: string;
  address: string;
  addressDetail: string;
}
