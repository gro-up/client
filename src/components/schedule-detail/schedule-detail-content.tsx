import Editor from '../editor/editor';
import { ScheduleDetailMap } from './schedule-detail-map';

// window 객체에 naver 속성을 추가하여 타입스크립트 오류 해결

export function ScheduleDetailContent() {
  return (
    <>
      <Editor />
      <ScheduleDetailMap />
    </>
  );
}
