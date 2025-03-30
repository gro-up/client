import { ShadowContainer } from '../ui/shadow-container';
import { PuzzleIcon } from '@/components/icons';
import { Header } from '../ui/header';

export const Question = () => {
  return (
    <ShadowContainer className="flex flex-col gap-2 w-[350px] min-h-[100px] p-4">
      <Header headerTitle="오늘의 문제" IconComponent={PuzzleIcon} />
      <div className="flex flex-col gap-2 ">
        <p className="text-sm"> this는 JavaScript에서 어떻게 작동하는지 설명해주세요.</p>
      </div>
    </ShadowContainer>
  );
};
