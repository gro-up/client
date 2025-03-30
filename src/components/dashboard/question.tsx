import { Puzzle } from 'lucide-react';
import { ShadowContainer } from '../ui/shadow-container';
import { Header } from '../ui/header';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../shadcn-ui';

export const Question = () => {
  return (
    <ShadowContainer className="flex flex-col gap-2  w-80 min-w-[350px] min-h-[100px] p-4">
      <Header headerTitle="오늘의 문제" IconComponent={Puzzle} />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>this는 JavaScript에서 어떻게 작동하는지 설명해주세요.</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </ShadowContainer>
  );
};
