import SignupHeader from "@/components/signup/signup-header";
import PasswordSection from "@/components/signup/signup-password-section";
import SubmitButton from "@/components/signup/signup-submit-button";
import SignupFooter from "@/components/signup/signup-footer";
import EmailSection from "@/components/signup/signup-email-section";

import { usePassword } from "@/hooks/auth/use-password";
import { useVerificationCode } from "@/hooks/auth/use-verification-code";
import { useVerificationEmail } from "@/hooks/auth/use-verification-email";
import { useSignup } from "@/hooks/auth";

export default function SignupPage() {
  const {
    email,
    emailError,
    isEmailValid,
    handleEmailChange,
    isPending,
    isSuccess,
    requestEmailVerification,
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

  const { requestSignup, isPending: isSignupPending } = useSignup();

  return (
    <>
      <SignupHeader />

      <form
        onSubmit={(e) => {
          e.preventDefault(); //  폼 기본 동작 방지
          requestSignup({ email, password }); // 회원가입 실행
        }}
        className="flex flex-col gap-2.5"
      >
        <EmailSection
          email={email}
          emailError={emailError}
          verificationCode={verificationCode}
          isEmailValid={isEmailValid}
          requestEmailVerification={requestEmailVerification}
          isSuccess={isSuccess}
          isPending={isPending}
          handleEmailChange={handleEmailChange}
          handleVerification={handleVerification}
          setVerificationCode={setVerificationCode}
          isCodeVerified={isCodeVerified}
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
            <SubmitButton
              disabled={
                isSignupPending ||
                !!passwordComplexityError ||
                !!passwordMatchError ||
                password === "" ||
                confirmPassword === ""
              }
            />
          </>
        )}
      </form>

      <SignupFooter />
    </>
  );
}
