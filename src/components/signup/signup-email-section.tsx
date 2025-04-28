import { Button, Input } from "../shadcn";

type EmailSectionProps = {
  email: string;
  verificationCode: string;
  isEmailValid: boolean;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleVerification: () => void;
  setVerificationCode: (code: string) => void;
};

export default function EmailSection({
  email,
  verificationCode,
  isEmailValid,
  handleEmailChange,
  handleVerification,
  setVerificationCode,
}: EmailSectionProps) {
  return (
    <>
      <Input
        type="email"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={handleEmailChange}
        className="h-11 w-125 !placeholder-white placeholder:text-xs text-white"
      />

      {isEmailValid && (
        <div className="relative w-60 h-12.5 self-end">
          <Input
            placeholder="인증번호"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleVerification();
              }
            }}
            className="w-full h-full pr-20 text-white text-xs placeholder:text-xs"
          />
          <Button
            type="button"
            variant="mint"
            onClick={handleVerification}
            className="h-full absolute top-1/2 right-0 -translate-y-1/2 px-3 text-sm rounded-r-md rounded-l-none border-none text-white"
          >
            확인
          </Button>
        </div>
      )}
    </>
  );
}
