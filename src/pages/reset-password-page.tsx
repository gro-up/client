import PasswordSection from "@/components/signup/signup-password-section";

import EmailSection from "@/components/signup/signup-email-section";

import { useVerificationEmail } from "@/hooks/auth/use-verification-email";
import { usePassword } from "@/hooks/auth/use-password";
import { useVerificationCode } from "@/hooks/auth/use-verification-code";
import ResetPasswordHeader from "@/components/reset-password/reset-password-header";
import { Button } from "@/components/shadcn";
import ResetPasswordFooter from "@/components/reset-password/reset-password-footer";
import { useResetPassword } from "@/hooks/auth";

export default function ResetPasswordPage() {
  const {
    email,
    emailError,
    handleEmailChange,
    isEmailValid,
    requestEmailVerification,
    isEmailVerificationPending,
    isEmailVerificationSuccess,
  } = useVerificationEmail();
  const {
    verificationCode,
    isCodeVerified,
    setVerificationCode,
    handleVerification,
    isVerifyError,
  } = useVerificationCode(email);
  const {
    password,
    confirmPassword,
    passwordComplexityError,
    passwordMatchError,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = usePassword();
  const { resetPassword } = useResetPassword();
  return (
    <>
      <ResetPasswordHeader />

      <form
        onSubmit={(e) => {
          e.preventDefault(); //  폼 기본 동작 방지
          resetPassword({ email, password }); // 회원가입 실행
        }}
        className="flex flex-col gap-2.5"
      >
        <EmailSection
          email={email}
          emailError={emailError}
          handleEmailChange={handleEmailChange}
          isEmailValid={isEmailValid}
          isPending={isEmailVerificationPending}
          isSuccess={isEmailVerificationSuccess}
          requestEmailVerification={requestEmailVerification}
          //
          verificationCode={verificationCode}
          handleVerification={handleVerification}
          setVerificationCode={setVerificationCode}
          isCodeVerified={isCodeVerified}
          //
          isVerifyError={isVerifyError}
        />

        {isCodeVerified && (
          <>
            <PasswordSection
              password={password}
              confirmPassword={confirmPassword}
              passwordComplexityError={passwordComplexityError}
              passwordMatchError={passwordMatchError}
              handlePasswordChange={handlePasswordChange}
              handleConfirmPasswordChange={handleConfirmPasswordChange}
            />
            <Button
              type="submit"
              variant="mint"
              disabled={
                !!passwordComplexityError ||
                !!passwordMatchError ||
                password === "" ||
                confirmPassword === ""
              }
            >
              비밀번호 바꾸기
            </Button>
          </>
        )}
      </form>
      <ResetPasswordFooter />
    </>
  );
}
