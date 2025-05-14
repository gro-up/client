import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { verifyCheck } from "@/api/auth";

export function useVerificationCode(email: string) {
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeVerified, setIsCodeVerified] = useState(false);

  const {
    mutate: verifyCode,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: (code: string) => verifyCheck(email, code),
    onSuccess: () => {
      setIsCodeVerified(true);
    },
    onError: () => {
      setIsCodeVerified(false);
      console.log(email);
    },
  });

  const handleVerification = () => {
    if (verificationCode.trim() === "") return;
    verifyCode(verificationCode);
  };

  return {
    verificationCode,
    setVerificationCode,
    handleVerification,
    isCodeVerified,
    isVerifying: isPending,
    isVerifyError: isError,
    verifyError: error,
  };
}
