import { LabelInput } from '../ui/label-input';
import { Button } from '../shadcn-ui';

export const NewQuestion = () => {
  return (
    <form>
      <LabelInput label="질문" />
      <LabelInput label="답변" />
      <Button type="submit">등록</Button>
    </form>
  );
};
