import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { QUERY_KEY, queryClient } from "@/query";
import { BASE_URL } from "@/api/base";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "../auth";

const reviewEdit = async (scheduleId: string, memo: string) => {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);

  const response = await fetch(`${BASE_URL}/api/retrospects/${scheduleId}`, {
    method: "PUT",
    body: JSON.stringify(memo),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

const editReviewError = () => {
  toast.error("회고 수정에 실패했습니다.");
};

export const useEditReview = (memo: string, scheduleId: string) => {
  const reviewEditMutation = useMutation({
    mutationFn: () => reviewEdit(scheduleId, memo),
    onSuccess: () => {
      editReviewSuccess();
    },
    onError: editReviewError,
  });

  const editReviewSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Reviews, scheduleId] });
    toast.success("회고를 수정 했습니다.");
  };

  return { ...reviewEditMutation };
};
