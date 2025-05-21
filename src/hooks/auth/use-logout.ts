import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { useCookies, COOKIES } from "@/hooks/auth/use-cookies";
import { ROUTER_PATH } from "@/router";
import { firebaseAuth } from "@/firebase/auth";

export const useLogout = () => {
  const { removeCookie } = useCookies();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await signOut(firebaseAuth);
      removeCookie(COOKIES.groAccessToken);
      removeCookie(COOKIES.groRefreshToken);
      toast.success("로그아웃 되었습니다.");
      navigate(ROUTER_PATH.PUBLIC.LANDING);
    } catch (error) {
      toast.error("로그아웃에 실패했습니다.");
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };

  return { logoutHandler };
};
