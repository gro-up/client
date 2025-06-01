import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { QUERY_KEY, queryClient } from "@/query";
import { BASE_URL } from "@/api/base";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "../auth";

interface deleteCompanyProps {
  companyId: string;
}

const deleteCompany = async ({ companyId }: deleteCompanyProps) => {
  const cookies = new Cookies();
  const token = cookies.get(ON_STEP_TOKEN_NAME);

  const response = await fetch(`${BASE_URL}/api/companies/${companyId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

const deleteCompanySuccess = () => {
  queryClient.invalidateQueries({ queryKey: [QUERY_KEY.Companies] });
  toast.success("관심 기업을 삭제했습니다.");
};

const deleteCompanyError = () => {
  toast.error("관심 기업 삭제 실패했습니다.");
};

export const useDeleteCompany = ({ companyId }: deleteCompanyProps) => {
  const companyMutation = useMutation({
    mutationFn: deleteCompany,
    onSuccess: deleteCompanySuccess,
    onError: deleteCompanyError,
  });

  const handleDeleteCompany = () => companyMutation.mutate({ companyId });

  return { handleDeleteCompany, ...companyMutation };
};
