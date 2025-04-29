import { useState } from "react";

export function usePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordComplexityError, setPasswordComplexityError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");

  // 비밀번호 복잡도 검사
  const validatePasswordComplexity = (pw: string) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (pw.length < 8 || !specialCharRegex.test(pw)) {
      setPasswordComplexityError("비밀번호는 8자 이상, 특수문자를 포함해야 합니다.");
      return false;
    } else {
      setPasswordComplexityError("");
      return true;
    }
  };

  // 비밀번호 일치 검사
  const validatePasswordMatch = (pw: string, confirmPw: string) => {
    if (pw && confirmPw && pw !== confirmPw) {
      setPasswordMatchError("비밀번호가 일치하지 않습니다.");
      return false;
    } else {
      setPasswordMatchError("");
      return true;
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePasswordComplexity(value);
    validatePasswordMatch(value, confirmPassword); // 패스워드 바뀔 때도 일치검사 같이 해야 됨
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validatePasswordMatch(password, value);
  };

  return {
    password,
    confirmPassword,
    passwordComplexityError,
    passwordMatchError,
    handlePasswordChange,
    handleConfirmPasswordChange,
    validatePasswordComplexity,
    validatePasswordMatch,
  };
}
