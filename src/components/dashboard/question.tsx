import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import { ShadowContainer } from '../ui/shadow-container';
import { PuzzleIcon } from '@/components/icons';
import { Header } from '../ui/header';

export const Question = () => {
  const date = new Date();
  const formattedDate = format(date, 'd일 (E)', { locale: ko });

  return (
    <ShadowContainer className="flex flex-col gap-2 min-w-[450px] min-h-[100px] p-4">
      <Header headerTitle={`${formattedDate} 오늘의 문제`} IconComponent={PuzzleIcon} />

      <li>this는 JavaScript에서 어떻게 작동하는지 설명해주세요.</li>
    </ShadowContainer>
  );
};
