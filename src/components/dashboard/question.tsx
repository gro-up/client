import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import { ShadowContainer } from '../ui/shadow-container';
import { PuzzleIcon } from '@/components/icons';

export const Question = () => {
  const date = new Date();
  const formattedDate = format(date, 'd일 (E)', { locale: ko });

  return (
    <ShadowContainer className="flex flex-col gap-2 min-w-[300px] min-h-[100px] py-4 ps-4">
      <div className="flex items-center gap-2 ">
        <PuzzleIcon className="w-5 h-5" />
        <h3 className="text-lg font-bold">{formattedDate} 오늘의 문제</h3>
      </div>
    </ShadowContainer>
  );
};
