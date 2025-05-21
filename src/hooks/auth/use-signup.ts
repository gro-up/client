import { useMutation } from "@tanstack/react-query";
import { signup } from "@/api/auth";
import { useState } from "react";

export function useSignup() {
  const [signupError, setSignupError] = useState("");

  const {
    mutate: requestSignup,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      setSignupError(""); // 성공 시 에러 초기화
    },
    onError: (err: Error) => {
      setSignupError(err.message || "회원가입 중 오류가 발생했습니다.");
    },
  });

  return {
    requestSignup, //
    isPending,
    isSuccess,
    isError,
    error,
    signupError,
  };
}
