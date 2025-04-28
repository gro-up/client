import { useState } from "react";
import { useNavigate } from "react-router";
export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 이메일 + 비밀번호 유효성 검사
  const validate = (email: string, password: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!emailRegex.test(email) || password.length < 8 || !specialCharRegex.test(password)) {
      setError("유효하지 않은 이메일 혹은 패스워드입니다.");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  // 이메일 변경 핸들러
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validate(value, password);
  };

  // 비밀번호 변경 핸들러
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validate(email, value);
  };

  // 폼 제출 핸들러
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate(email, password);

    if (isValid) {
      console.log("로그인 시도", { email, password });
      // TODO: 로그인 API 호출 추가 예정
    }
  };

  return {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    navigate,
  };
}
