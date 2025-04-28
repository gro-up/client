import { useState } from "react";

export function useEmail() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setIsEmailValid(false);
      setEmailError("유효하지 않은 이메일입니다.");
      return false;
    } else {
      setIsEmailValid(true);
      setEmailError("");
      return true;
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  return {
    email,
    setEmail,
    isEmailValid,
    emailError,

    handleEmailChange,
    validateEmail,
  };
}
