import { useEffect, useReducer } from "react";
import type { DaumPostcodeData } from "@/types";
import type { Company } from "./use-get-detail-company";
import { toast } from "sonner";

export interface CompanyFormValues {
  companyName: string;
  position: string;
  url: string;
  address: string;
  addressDetail: string;
}

enum ACTIONS_TYPES {
  SET_COMPANY_NAME = "SET_COMPANY_NAME",
  SET_POSITION = "SET_POSITION",
  SET_URL = "SET_URL",
  SET_ADDRESS = "SET_ADDRESS",
  SET_ADDRESS_DETAIL = "SET_ADDRESS_DETAIL",
  SET_COMPANY_INITIAL_VALUES = "SET_COMPANY_INITIAL_VALUES",
}

export enum COMPANY_FORM_VALUES_HANDLER_KEY {
  COMPANY_NAME = "companyName",
  POSITION = "position",
  URL = "url",
  ADDRESS = "address",
  ADDRESS_DETAIL = "addressDetail",
}

const INITIAL_COMPANY_FORM_VALUES: CompanyFormValues = {
  companyName: "",
  position: "",
  url: "",
  address: "",
  addressDetail: "",
};

type CompanyFormAction =
  | { type: ACTIONS_TYPES.SET_COMPANY_NAME; payload: string }
  | { type: ACTIONS_TYPES.SET_POSITION; payload: string }
  | { type: ACTIONS_TYPES.SET_URL; payload: string }
  | { type: ACTIONS_TYPES.SET_ADDRESS; payload: string }
  | { type: ACTIONS_TYPES.SET_ADDRESS_DETAIL; payload: string }
  | { type: ACTIONS_TYPES.SET_COMPANY_INITIAL_VALUES; payload: Company };

const companyFormValuesReducer = (state: CompanyFormValues, action: CompanyFormAction) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_COMPANY_NAME:
      return { ...state, companyName: action.payload };
    case ACTIONS_TYPES.SET_POSITION:
      return { ...state, position: action.payload };
    case ACTIONS_TYPES.SET_URL:
      return { ...state, url: action.payload };
    case ACTIONS_TYPES.SET_ADDRESS:
      return { ...state, address: action.payload };
    case ACTIONS_TYPES.SET_ADDRESS_DETAIL:
      return { ...state, addressDetail: action.payload };
    case ACTIONS_TYPES.SET_COMPANY_INITIAL_VALUES:
      return { ...action.payload };
    default:
      return state;
  }
};

export const useCompanyFormValues = (company?: Company | null) => {
  const [companyFormValues, companyFormValuesDispatch] = useReducer(
    companyFormValuesReducer,
    INITIAL_COMPANY_FORM_VALUES,
  );

  useEffect(() => {
    if (company) {
      companyFormValuesDispatch({
        type: ACTIONS_TYPES.SET_COMPANY_INITIAL_VALUES,
        payload: company,
      });
    }
  }, [company]);

  const handleCompanyFormValuesChange =
    (field: COMPANY_FORM_VALUES_HANDLER_KEY) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const actionMap: Record<COMPANY_FORM_VALUES_HANDLER_KEY, ACTIONS_TYPES> = {
        [COMPANY_FORM_VALUES_HANDLER_KEY.COMPANY_NAME]: ACTIONS_TYPES.SET_COMPANY_NAME,
        [COMPANY_FORM_VALUES_HANDLER_KEY.POSITION]: ACTIONS_TYPES.SET_POSITION,
        [COMPANY_FORM_VALUES_HANDLER_KEY.URL]: ACTIONS_TYPES.SET_URL,
        [COMPANY_FORM_VALUES_HANDLER_KEY.ADDRESS]: ACTIONS_TYPES.SET_ADDRESS,
        [COMPANY_FORM_VALUES_HANDLER_KEY.ADDRESS_DETAIL]: ACTIONS_TYPES.SET_ADDRESS_DETAIL,
      };

      companyFormValuesDispatch({
        type: actionMap[field],
        payload: e.target.value,
      } as CompanyFormAction);
    };

  const handleAddressClick = () => {
    if (!window.daum?.Postcode) {
      toast.error("주소 검색 기능을 사용할 수 없습니다.");
      return;
    }

    const postcode = new window.daum.Postcode({
      oncomplete: (data: DaumPostcodeData) => {
        handleCompanyFormValuesChange(COMPANY_FORM_VALUES_HANDLER_KEY.ADDRESS)({
          target: { value: data.address },
        } as React.ChangeEvent<HTMLInputElement>);
      },
    });

    postcode.open();
  };

  return {
    companyFormValues,
    handleCompanyFormValuesChange,
    handleAddressClick,
  };
};
