import { useCookies as useReactCookies } from "react-cookie";

export enum COOKIES {
  groAccessToken = "groAccessToken",
  groRefreshToken = "groRefreshToken",
}

export const useCookies = () => {
  const [cookies, setCookie, removeCookie] = useReactCookies([
    COOKIES.groAccessToken,
    COOKIES.groRefreshToken,
  ]);

  return { cookies, setCookie, removeCookie };
};
