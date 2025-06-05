import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { QUERY_KEY, queryClient } from "@/query";
import { BASE_URL } from "@/api/base";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "../auth";

const handleReviewDelete = async (scheduleId: string) => {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);

  const response = await fetch(`${BASE_URL}/api/retrospects/${scheduleId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response.json());

  return response.json();
};

const deleteReviewError = () => {
  toast.error("회고 삭제에 실패했습니다.");
};

export const useDeleteReview = (scheduleId: string) => {
  const reviewDeleteMutation = useMutation({
    mutationFn: () => handleReviewDelete(scheduleId),
    onSuccess: () => {
      deleteReviewSuccess();
    },
    onError: deleteReviewError,
  });

  const deleteReviewSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Reviews, scheduleId] });
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Reviews] });
    toast.success("회고를 삭제 했습니다.");
  };

  return { ...reviewDeleteMutation };
};
