import { verifyEmail, requestResetPassword } from "@/api/auth";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export function useVerificationEmail() {
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

  // 1. 일반 이메일 인증 요청 (ex: 회원가입용 이메일 인증)
  const {
    mutate: requestEmailVerification,
    isPending: isEmailVerificationPending,
    isSuccess: isEmailVerificationSuccess,
    isError: isEmailVerificationError,
    error: emailVerificationError,
  } = useMutation<void, Error, string>({
    mutationFn: verifyEmail,
    onSuccess: () => {
      console.log("이메일 인증 요청 성공");
    },
    onError: async (err: unknown) => {
      if (err instanceof Error) {
        setEmailError(err.message);
      } else {
        setEmailError("알 수 없는 에러가 발생했습니다.");
      }
    },
  });

  // 2. 비밀번호 재설정 이메일 인증 요청
  const {
    mutate: requestResetEmail,
    isPending: isResetEmailPending,
    isSuccess: isResetEmailSuccess,
    isError: isResetEmailError,
    error: resetEmailError,
  } = useMutation<void, Error, string>({
    mutationFn: requestResetPassword,
    onSuccess: () => {
      console.log("비밀번호 재설정 이메일 요청 성공");
    },
    onError: async (err: unknown) => {
      if (err instanceof Error) {
        setEmailError(err.message);
      } else {
        setEmailError("알 수 없는 에러가 발생했습니다.");
      }
    },
  });
  return {
    // 입력 상태
    email,
    setEmail,
    isEmailValid,
    emailError,

    // 이벤트
    handleEmailChange,
    validateEmail,

    // 일반 이메일 인증 요청
    requestEmailVerification,
    isEmailVerificationPending,
    isEmailVerificationSuccess,
    isEmailVerificationError,
    emailVerificationError,

    // 비밀번호 재설정 이메일 인증 요청
    requestResetEmail,
    isResetEmailPending,
    isResetEmailSuccess,
    isResetEmailError,
    resetEmailError,
  };
}
