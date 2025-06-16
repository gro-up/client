import { NavLink } from "react-router";
import { SIDEBAR_PATHS } from "@/utils/navigation";
import { UserNavigation } from "./user-navigation";

import { linkHandler } from "@/utils/navigation/link-handler";

export const Sidebar = () => {
  return (
    <aside className="flex flex-1 flex-row-reverse items-center lg:p-0 justify-center lg:items-start lg:justify-start lg:flex-col gap-2 lg:gap-4 w-full lg:w-[300px] max-h-[750px]  lg:h-full rounded-md">
      <UserNavigation />

      <nav className="flex lg:flex-col gap-1 sm:gap-3 lg:gap-6 pl-4">
        {SIDEBAR_PATHS.map((navigation) => {
          return (
            <NavLink
              key={navigation.to}
              to={navigation.to ?? ""}
              className={({ isActive }) =>
                linkHandler({
                  isActive,
                  activeCSS: "border-b-2 lg:border-b-0 lg:border-l-2 border-blue-400 pl-2",
                  defaultCSS:
                    "h-10  lg:h-auto w-13 sm:w-20 lg:w-auto font-semibold transition-all duration-300 flex justify-center lg:justify-start items-center gap-2 text-[10px] sm:text-[13px]  lg:text-[16px]  ",
                })
              }
            >
              {navigation.icon && <navigation.icon className="w-4 h-4 hidden lg:block" />}
              <span>{navigation.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};
