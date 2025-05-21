import { useCookies as useReactCookies } from "react-cookie";

export const ON_STEP_TOKEN_NAME = "on-step-token";
export const ON_STEP_REFRESH_TOKEN_NAME = "on-step-refresh-token";

export const useCookies = () => {
  const [cookies, setCookie, removeCookie] = useReactCookies([
    ON_STEP_TOKEN_NAME,
    ON_STEP_REFRESH_TOKEN_NAME,
  ]);

  return { cookies, setCookie, removeCookie };
};
