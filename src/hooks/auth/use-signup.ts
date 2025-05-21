import { useMutation } from "@tanstack/react-query";
import { signup } from "@/api/auth";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export function useSignup() {
  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();
  const {
    mutate: requestSignup,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("회원가입이 완료 되었습니다.");
      navigate("/login");
      setSignupError(""); // 성공 시 에러 초기화
    },
    onError: (err: Error) => {
      toast.error("회원가입에 실패했습니다.");
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
