import SignupHeader from "@/components/signup/signup-header";
import PasswordSection from "@/components/signup/signup-password-section";
import SubmitButton from "@/components/signup/signup-submit-button";
import SignupFooter from "@/components/signup/signup-footer";
import EmailSection from "@/components/signup/signup-email-section";

import { useEmail } from "@/hooks/auth/use-email";
import { usePassword } from "@/hooks/auth/use-password";
import { useVerificationCode } from "@/hooks/auth/use-verification-code";

export default function SignupPage() {
  // 각각 역할별로 분리해서 훅 가져오기
  const { email, isEmailValid, handleEmailChange } = useEmail();
  const { verificationCode, isCodeVerified, setVerificationCode, handleVerification } =
    useVerificationCode();
  const { password, confirmPassword, passwordError, setPassword, handleConfirmPasswordChange } =
    usePassword();

  return (
    <>
      <SignupHeader />

      <form className="flex flex-col gap-2.5">
        <EmailSection
          email={email}
          verificationCode={verificationCode}
          isEmailValid={isEmailValid}
          handleEmailChange={handleEmailChange}
          handleVerification={handleVerification}
          setVerificationCode={setVerificationCode}
        />

        {isCodeVerified && (
          <>
            <PasswordSection
              password={password}
              confirmPassword={confirmPassword}
              passwordError={passwordError}
              setPassword={setPassword}
              handleConfirmPasswordChange={handleConfirmPasswordChange}
            />
            <SubmitButton />
          </>
        )}
      </form>

      <SignupFooter />
    </>
  );
}
