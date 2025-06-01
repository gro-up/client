import { useState } from "react";
import { Cookies } from "react-cookie";
import { BASE_URL } from "@/api/base";
import { ON_STEP_TOKEN_NAME } from "../auth";

import { toast } from "sonner";

export interface Company {
  companyId: string;
  companyName: string;
  position: string;
  url: string;
  address: string;
  addressDetail: string;
}

type CompanyResponse = {
  code: number;
  status: string;
  message: string;
  data: Company;
};

export const useGetDetailCompany = (companyId: string) => {
  const [company, setCompany] = useState<Company | null>(null);

  const getDetailCompany = async () => {
    const cookies = new Cookies();
    const accessToken = cookies.get(ON_STEP_TOKEN_NAME);

    const response = await fetch(`${BASE_URL}/api/companies/${companyId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      toast.error("기업 정보를 불러오는데 실패했습니다.");
    }

    const data = (await response.json()) as CompanyResponse;
    console.log(data);

    setCompany(data.data);
  };

  return { company, getDetailCompany };
};
