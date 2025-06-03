import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  Avatar,
  AvatarImage,
  DropdownMenuContent,
  Button,
} from "@/components/shadcn";

import { DROPDOWN_PATHS } from "@/utils/navigation/paths";
import { useLogout, useProfile } from "@/hooks/auth";
import { DropdownPathItems } from "@/utils/navigation/constants";
import { useState } from "react";
import ProfileModal from "./profile-modal";
export const UserNavigation = () => {
  const { profile } = useProfile();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="cursor-pointer hover:bg-transparent focus:border-transparent focus:focus:ring-0"
      >
        <Button variant="ghost" className="lg:w-full flex justify-between items-center mt-3 ">
          <Avatar className="w-8 h-8 mr-1">
            <AvatarImage src={profile.photo || undefined} />
          </Avatar>

          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col text-left">
              <span className="text-xs text-gray-500">{profile.email}</span>
            </div>

            <ChevronDown />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <UserNavigation.Content />
    </DropdownMenu>
  );
};

const Content = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { logoutHandler } = useLogout();

  const handleEvent = (title: string) => {
    switch (title) {
      case DropdownPathItems.PROFILE:
        setIsProfileModalOpen(true); // 모달 열기
        break;
      case DropdownPathItems.LOGOUT:
        logoutHandler();
        break;
    }
  };
  return (
    <>
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
      <DropdownMenuContent align="end">
        <div className="flex flex-col gap-2">
          {DROPDOWN_PATHS.map((path) => (
            <div key={path.title}>
              <p className="flex items-center gap-2 text-sm ps-1">{path.title}</p>
              <hr />
              <div>
                {path.children && (
                  <>
                    {path.children.map((child) => {
                      const isEvent = child.type === "event";
                      return (
                        <div
                          key={child.title}
                          className="list-none cursor-pointer"
                          onClick={() => {
                            if (isEvent) handleEvent(child.title);
                          }}
                        >
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <span className="flex justify-center items-center w-5 h-5 ms-1 my-2">
                              {child.icon && <child.icon />}
                            </span>
                            {isEvent ? (
                              <span>{child.title}</span>
                            ) : (
                              <Link
                                to={child.to ?? ""}
                                onClick={(e) => e.stopPropagation()} // 상위 클릭 방지
                              >
                                {child.title}
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </>
  );
};

UserNavigation.Content = Content;
