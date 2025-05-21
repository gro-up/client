import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { QUERY_KEY, queryClient } from "@/query";
import type { CompanyFormValues } from "./use-company-form-values";
import { BASE_URL } from "@/api/base";

const createCompany = async (companyFormValues: CompanyFormValues) => {
  const response = await fetch(`${BASE_URL}/api/companies`, {
    method: "POST",
    body: JSON.stringify(companyFormValues),
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
  const companyMutation = useMutation({
    mutationFn: createCompany,
    onSuccess: createCompanySuccess,
    onError: createCompanyError,
  });

  const handleCreateCompany = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    companyMutation.mutate(companyFormValues);
  };

  return { handleCreateCompany, ...companyMutation };
};
