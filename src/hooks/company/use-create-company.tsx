import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { QUERY_KEY, queryClient } from "@/query";
import type { CompanyFormValues } from "./use-company-form-values";
import { BASE_URL } from "@/api/base";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "../auth";

const createCompany = async (companyFormValues: CompanyFormValues) => {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);

  const response = await fetch(`${BASE_URL}/api/companies`, {
    method: "POST",
    body: JSON.stringify(companyFormValues),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

const createCompanySuccess = () => {
  queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Companies] });
  toast.success("관심 기업을 추가했습니다.");
};

const createCompanyError = () => {
  toast.error("관심 기업 추가 실패했습니다.");
};

export const useCreateCompany = (companyFormValues: CompanyFormValues) => {
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

    companyMutation.mutate(companyFormValues);
  };

  return { isOpen, setIsOpen, handleCreateCompany, ...companyMutation };
};
