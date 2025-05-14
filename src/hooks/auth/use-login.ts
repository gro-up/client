import { useNavigate } from "react-router";
import { useVerificationEmail } from "./use-verification-email";
import { usePassword } from "./use-password";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signin } from "@/api/auth"; // 경로는 프로젝트 구조에 맞게 조정
import { useCookies, ON_STEP_TOKEN_NAME } from "./use-cookies";
import { ROUTER_PATH } from "@/router";
import { toast } from "sonner";
export function useLogin() {
  const navigate = useNavigate();
  const { setCookie } = useCookies();
  const [error, setError] = useState("");
  const { email, emailError, handleEmailChange, validateEmail } = useVerificationEmail();
  const { password, passwordComplexityError, handlePasswordChange, validatePasswordComplexity } =
    usePassword();

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: () => signin(email, password),
    onSuccess: (data) => {
      const token = data.token;
      setCookie(ON_STEP_TOKEN_NAME, JSON.stringify({ token }));
      navigate(`${ROUTER_PATH.PRIVATE.PARENT.APP}/${ROUTER_PATH.PRIVATE.CHILD.DASHBOARD}`);
      toast.success("로그인 성공");
    },
    onError: (err) => {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePasswordComplexity(password);

    if (!isEmailValid || !isPasswordValid) {
      setError("유효하지 않은 이메일 혹은 패스워드입니다.");
      return;
    }

    setError("");
    loginMutate(); // React Query mutation 호출
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
    isPending,
  };
}
