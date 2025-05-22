import PasswordSection from "@/components/signup/signup-password-section";

import EmailSection from "@/components/signup/signup-email-section";

import { useVerificationEmail } from "@/hooks/auth/use-verification-email";
import { usePassword } from "@/hooks/auth/use-password";
import { useVerificationCode } from "@/hooks/auth/use-verification-code";
import ResetPasswordHeader from "@/components/reset-password/reset-password-header";
import { Button } from "@/components/shadcn";
import ResetPasswordFooter from "@/components/reset-password/reset-password-footer";

export default function ResetPasswordPage() {
  const {
    email,
    handleEmailChange,
    isEmailValid,
    requestResetEmail,
    isResetEmailPending,
    isResetEmailSuccess,
  } = useVerificationEmail();
  const { verificationCode, isCodeVerified, setVerificationCode, handleVerification } =
    useVerificationCode(email);
  const {
    password,
    confirmPassword,
    passwordComplexityError,
    passwordMatchError,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = usePassword();

  return (
    // 다시 해야함
    <>
      <ResetPasswordHeader />

      <form className="flex flex-col gap-2.5">
        <EmailSection
          email={email}
          handleEmailChange={handleEmailChange}
          isEmailValid={isEmailValid}
          verificationCode={verificationCode}
          handleVerification={handleVerification}
          setVerificationCode={setVerificationCode}
          isCodeVerified={isCodeVerified}
          isPending={isResetEmailPending}
          isSuccess={isResetEmailSuccess}
          requestEmailVerification={requestResetEmail}
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
            <Button variant="mint">비밀번호 바꾸기</Button>
          </>
        )}
      </form>
      <ResetPasswordFooter />
    </>
  );
}
