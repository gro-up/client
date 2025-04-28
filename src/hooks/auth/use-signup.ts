import { useState } from "react";

export default function useSignup() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // 이메일 입력 핸들러
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  // 인증번호 확인 핸들러
  const handleVerification = () => {
    // 실제로는 서버에 인증번호를 보내서 검증해야 하지만,
    // 지금은 인증번호가 비어있지만 않으면 바로 인증 성공 처리한다.
    if (verificationCode.trim() !== "") {
      setIsCodeVerified(true);
    }
  };

  // 비밀번호 확인 핸들러
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (password && value !== password) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordError("");
    }
  };

  return {
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
  };
}
