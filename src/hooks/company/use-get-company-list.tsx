import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/api/base";
import { Cookies } from "react-cookie";
import { ON_STEP_TOKEN_NAME } from "../auth";
import { QUERY_KEY } from "@/query";

export interface Company {
  companyId: string;
  companyName: string;
  position: string;
  url: string;
}

type CompanyListResponse = {
  data: {
    companyList: Company[] | [];
  };
};

const getCompanyList = async () => {
  const cookies = new Cookies();
  const accessToken = cookies.get(ON_STEP_TOKEN_NAME);

  const response = await fetch(`${BASE_URL}/api/companies`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json() as Promise<CompanyListResponse>;
};

export const useGetCompanyList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.Companies],
    queryFn: getCompanyList,
  });

  return { data, isLoading, error };
};
