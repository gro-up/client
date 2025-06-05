import { BASE_URL } from "@/api/base";
import { useQuery } from "@tanstack/react-query";
import { ON_STEP_TOKEN_NAME } from "../auth";
import { Cookies } from "react-cookie";

const getReviewList = async () => {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);

  const response = await fetch(`${BASE_URL}/api/retrospects`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const useGetReviewList = () =>
  useQuery({
    queryKey: ["reviewList"],
    queryFn: () => getReviewList(),
  });
