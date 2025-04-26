import { ON_STEP_TOKEN_NAME, useCookies } from "@/hooks/auth/use-cookies";
import { Navigate, Outlet } from "react-router";
import { ROUTER_PATH } from "../router/paths";
import { ThemeProvider } from "next-themes";

export const PublicLayout = () => {
  const { cookies } = useCookies();

  if (cookies[ON_STEP_TOKEN_NAME]) {
    return (
      <Navigate
        to={`${ROUTER_PATH.PRIVATE.PARENT.APP}/${ROUTER_PATH.PRIVATE.CHILD.DASHBOARD}`}
      />
    );
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="gro-ui-theme">
      <main className="flex  flex-col justify-center items-center gap-4 w-full h-screen px-4 bg-neutral-900">
        <Outlet />
      </main>
    </ThemeProvider>
  );
};
