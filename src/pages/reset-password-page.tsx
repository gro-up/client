import PasswordSection from "@/components/signup/signup-password-section";

import EmailSection from "@/components/signup/signup-email-section";

import { useEmail } from "@/hooks/auth/use-email";
import { usePassword } from "@/hooks/auth/use-password";
import { useVerificationCode } from "@/hooks/auth/use-verification-code";
import ResetPasswordHeader from "@/components/reset-password/reset-password-header";
import { Button } from "@/components/shadcn";
import ResetPasswordFooter from "@/components/reset-password/reset-password-footer";

export default function ResetPasswordPage() {
  const { email, isEmailValid, handleEmailChange } = useEmail();
  const { verificationCode, isCodeVerified, setVerificationCode, handleVerification } =
    useVerificationCode();
  const {
    password,
    confirmPassword,
    passwordComplexityError,
    passwordMatchError,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = usePassword();

  return (
    <>
      <ResetPasswordHeader />

      <form className="flex flex-col gap-2.5">
        <EmailSection
          email={email}
          verificationCode={verificationCode}
          isEmailValid={isEmailValid}
          handleEmailChange={handleEmailChange}
          handleVerification={handleVerification}
          setVerificationCode={setVerificationCode}
          isCodeVerified={isCodeVerified}
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
