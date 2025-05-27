import { useReducer } from "react";

export interface CompanyFormValues {
  companyName: string;
  position: string;
  url: string;
}

enum ACTIONS_TYPES {
  SET_COMPANY_NAME = "SET_COMPANY_NAME",
  SET_POSITION = "SET_POSITION",
  SET_URL = "SET_URL",
}

export enum COMPANY_FORM_VALUES_HANDLER_KEY {
  COMPANY_NAME = "companyName",
  POSITION = "position",
  URL = "url",
}

const INITIAL_COMPANY_FORM_VALUES: CompanyFormValues = {
  companyName: "",
  position: "",
  url: "",
};

type CompanyFormAction =
  | { type: ACTIONS_TYPES.SET_COMPANY_NAME; payload: string }
  | { type: ACTIONS_TYPES.SET_POSITION; payload: string }
  | { type: ACTIONS_TYPES.SET_URL; payload: string };

const companyFormValuesReducer = (state: CompanyFormValues, action: CompanyFormAction) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_COMPANY_NAME:
      return { ...state, companyName: action.payload };
    case ACTIONS_TYPES.SET_POSITION:
      return { ...state, position: action.payload };
    case ACTIONS_TYPES.SET_URL:
      return { ...state, url: action.payload };
    default:
      return state;
  }
};

export const useCompanyFormValues = () => {
  const [companyFormValues, companyFormValuesDispatch] = useReducer(
    companyFormValuesReducer,
    INITIAL_COMPANY_FORM_VALUES,
  );

  const handleCompanyFormValuesChange =
    (field: COMPANY_FORM_VALUES_HANDLER_KEY) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const actionMap: Record<COMPANY_FORM_VALUES_HANDLER_KEY, ACTIONS_TYPES> = {
        [COMPANY_FORM_VALUES_HANDLER_KEY.COMPANY_NAME]: ACTIONS_TYPES.SET_COMPANY_NAME,
        [COMPANY_FORM_VALUES_HANDLER_KEY.POSITION]: ACTIONS_TYPES.SET_POSITION,
        [COMPANY_FORM_VALUES_HANDLER_KEY.URL]: ACTIONS_TYPES.SET_URL,
      };

      companyFormValuesDispatch({
        type: actionMap[field],
        payload: e.target.value,
      });
    };

  return {
    companyFormValues,
    handleCompanyFormValuesChange,
  };
};
