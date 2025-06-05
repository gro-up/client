import { BASE_URL } from "@/api/base";
import { useQuery } from "@tanstack/react-query";
import { ON_STEP_TOKEN_NAME } from "../auth";
import { Cookies } from "react-cookie";

const getReviewDetail = async (scheduleId: number) => {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);

  const response = await fetch(`${BASE_URL}/api/retrospects/${scheduleId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const useGetReviewDetail = (scheduleId: number) =>
  useQuery({
    queryKey: ["reviewDetail", scheduleId],
    queryFn: () => getReviewDetail(scheduleId),
  });
