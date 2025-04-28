import { useNavigate } from "react-router";
import { useEmail } from "./use-email";
import { usePassword } from "./use-password";
import { useState } from "react";

export function useLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { email, emailError, handleEmailChange, validateEmail } = useEmail();
  const { password, passwordComplexityError, handlePasswordChange, validatePasswordComplexity } =
    usePassword();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePasswordComplexity(password); // 🔥 복잡도만 검사

    if (!isEmailValid || !isPasswordValid) {
      setError("유효하지 않은 이메일 혹은 패스워드입니다.");
      return;
    }

    setError("");
    console.log("로그인 시도", { email, password });
    // TODO: 로그인 API 호출 예정
  };

  return {
    email,
    password,
    emailError,
    passwordComplexityError,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    navigate,
    error,
  };
}
