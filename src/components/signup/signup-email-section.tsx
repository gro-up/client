import { Button, Input } from "../shadcn";
import ArrowRightIcon from "../icons/ArrowRightIcon";

import { useVerificationCode } from "@/hooks/auth";
import { UseMutateFunction } from "@tanstack/react-query";

export type EmailSectionProps = {
  email: string;
  isEmailValid: boolean;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  verificationCode: string;
  requestEmailVerification: UseMutateFunction<void, Error, string>;
  handleVerification: () => void;
  setVerificationCode: (code: string) => void;
  isCodeVerified: boolean;
  isVerifyError: boolean;
  isPending: boolean;
  isSuccess: boolean;
  emailError: string;
};

export default function EmailSection({
  email,
  emailError,
  isEmailValid,
  handleEmailChange,

  verificationCode,
  requestEmailVerification,
  handleVerification,
  setVerificationCode,
  isCodeVerified,
  isPending,
  isSuccess,
  isVerifyError,
}: EmailSectionProps) {
  const { isVerifying } = useVerificationCode(email);
  const emailButtonVariant = isEmailValid && !isSuccess ? "mint" : "darkgray";
  const confirmButtonVariant = isCodeVerified ? "darkgray" : "mint";

  return (
    <>
      <div className="relative">
        <Input
          type="email"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={handleEmailChange}
          disabled={isSuccess} // 인증 완료 후 입력 막기
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); //
              requestEmailVerification(email); //
            }
          }}
          className="h-11 w-125 pr-13 !placeholder-white placeholder:text-xs text-white"
        />

        <Button
          variant={emailButtonVariant}
          disabled={!isEmailValid || isPending || isSuccess}
          onClick={() => requestEmailVerification(email)}
          type="button"
          className="w-7.5 h-7.5 absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
        >
          {isPending ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <ArrowRightIcon className="w-5 h-5" />
          )}
        </Button>
      </div>
      <p className="text-red-500 text-xs pt-0.5">{emailError}</p>
      {isSuccess && (
        <>
          {!isCodeVerified && (
            <p className="self-end text-emerald-400 text-xs p-2.5">
              인증 번호가 발송되었습니다. 이메일을 확인해주세요
            </p>
          )}
          <div className="relative w-60 h-12.5 self-end">
            <Input
              placeholder="인증번호"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              disabled={isCodeVerified}
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
              variant={confirmButtonVariant}
              onClick={handleVerification}
              disabled={isVerifying || isCodeVerified}
              className={`h-[96%] absolute top-1/2 right-[0.3px] -translate-y-1/2 px-3 text-sm rounded-r-md rounded-l-none border-none`}
            >
              {isVerifying ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "확인"
              )}
            </Button>
            {isVerifyError && !isCodeVerified && (
              <p className="self-end text-right text-red-500 text-xs pt-2.5">
                인증 코드가 유효하지 않습니다.
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
}
