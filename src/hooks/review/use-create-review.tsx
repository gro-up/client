import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { QUERY_KEY, queryClient } from "@/query";
import { BASE_URL } from "@/api/base";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "../auth";

interface ReviewFormValue {
  scheduleId: string;
  memo: string;
}

const createCompany = async (reviewFormValue: ReviewFormValue) => {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);

  const response = await fetch(`${BASE_URL}/api/companies`, {
    method: "POST",
    body: JSON.stringify(reviewFormValue),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

const createCompanySuccess = () => {
  queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Companies] });
  toast.success("리뷰를 추가했습니다.");
};

const createCompanyError = () => {
  toast.error("리뷰 추가 실패했습니다.");
};

export const useCreateReview = (scheduleId: string, reviewFormValue: string) => {
  const [isOpen, setIsOpen] = useState(false);

  const companyMutation = useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      createCompanySuccess();
      setIsOpen(false);
    },
    onError: createCompanyError,
  });

  const handleCreateCompany = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    companyMutation.mutate({ scheduleId, memo: reviewFormValue });
  };

  return { isOpen, setIsOpen, handleCreateCompany, ...companyMutation };
};
