import { useMutation } from "@tanstack/react-query";
import { passwordReset } from "@/api/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router";
export const useResetPassword = () => {
  const navigate = useNavigate();
  const {
    mutate: resetPassword,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      passwordReset(email, password),

    onSuccess: () => {
      toast.info("비밀번호 변경 완료");
      navigate("/login");
    },
    onError: async (err: unknown) => {
      if (err instanceof Error) {
        toast.info(err.message);
      }
    },
  });

  return { resetPassword, isPending, isSuccess, isError, error };
};
