import { verifyEmail } from "@/api/auth";
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

  const {
    mutate: requestEmailVerification,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation<void, Error, string>({
    mutationFn: verifyEmail,
    onSuccess: () => {
      console.log("인증 요청 성공");
    },
    onError: async (err: unknown) => {
      if (err instanceof Error) {
        setEmailError(err.message);
        console.log(err.message);
      } else {
        setEmailError("알 수 없는 에러가 발생했습니다.");
      }
    },
  });

  return {
    email,
    setEmail,
    isEmailValid,
    emailError,

    handleEmailChange,
    validateEmail,

    requestEmailVerification,
    isPending, //
    isSuccess, //
    isError, //
    error, //
  };
}
