import { Button } from "../shadcn";

type SubmitButtonProps = {
  disabled?: boolean;
};

export default function SubmitButton({ disabled }: SubmitButtonProps) {
  return (
    <Button type="submit" variant="mint" disabled={disabled}>
      회원가입
    </Button>
  );
}
