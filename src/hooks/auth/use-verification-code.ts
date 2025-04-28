import { useState } from "react";

export function useVerificationCode() {
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeVerified, setIsCodeVerified] = useState(false);

  const handleVerification = () => {
    if (verificationCode.trim() !== "") {
      setIsCodeVerified(true);
    }
  };

  return {
    verificationCode,
    isCodeVerified,
    setVerificationCode,
    handleVerification,
  };
}
