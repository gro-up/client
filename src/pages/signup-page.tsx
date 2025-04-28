import SignupHeader from "@/components/signup/signup-header";
import PasswordSection from "@/components/signup/signup-password-section";
import SubmitButton from "@/components/signup/signup-submit-button";
import SignupFooter from "@/components/signup/signup-footer";
import EmailSection from "@/components/signup/signup-email-section";
import useSignup from "@/hooks/auth/use-signup";

export default function SignupPage() {
  const {
    email,
    isEmailValid,
    verificationCode,
    isCodeVerified,
    password,
    confirmPassword,
    passwordError,
    setVerificationCode,
    setPassword,
    handleEmailChange,
    handleVerification,
    handleConfirmPasswordChange,
  } = useSignup();

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
