import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { QUERY_KEY, queryClient } from "@/query";
import type { CompanyFormValues } from "./use-company-form-values";
import { BASE_URL } from "@/api/base";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "../auth";

interface EditCompanyProps {
  companyFormValues: CompanyFormValues;
  companyId: string;
}

const editCompany = async ({ companyFormValues, companyId }: EditCompanyProps) => {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);

  const response = await fetch(`${BASE_URL}/api/companies/${companyId}`, {
    method: "PUT",
    body: JSON.stringify(companyFormValues),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

const editCompanySuccess = () => {
  queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Companies] });
  toast.success("관심 기업을 수정했습니다.");
};

const editCompanyError = () => {
  toast.error("관심 기업 수정 실패했습니다.");
};

export const useEditCompany = ({ companyFormValues, companyId }: EditCompanyProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const companyMutation = useMutation({
    mutationFn: editCompany,
    onSuccess: () => {
      editCompanySuccess();
      setIsOpen(false);
    },
    onError: editCompanyError,
  });

  const handleEditCompany = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    companyMutation.mutate({ companyFormValues, companyId });
  };

  return { isOpen, setIsOpen, handleEditCompany, ...companyMutation };
};
