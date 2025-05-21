import { Navigate, Outlet } from "react-router";
import { COOKIES, useCookies } from "@/hooks/auth";
import { ROUTER_PATH } from "@/router";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/context/theme";

export const PrivateLayout = () => {
  const { cookies } = useCookies();

  if (!cookies[COOKIES.groAccessToken]) {
    return <Navigate to={ROUTER_PATH.PUBLIC.LANDING} />;
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="gro-ui-theme">
      <main className="flex justify-center items-center gap-4 w-full h-screen px-4 bg-neutral-900">
        <Sidebar />

        <div className="flex  items-center w-full min-h-[750px] gap-2 h-11/12">
          <Outlet />
        </div>
      </main>
    </ThemeProvider>
  );
};
