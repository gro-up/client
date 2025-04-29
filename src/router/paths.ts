export const ROUTER_PATH = {
  PUBLIC: {
    LANDING: "/",
    SIGNUP: "/signup",
    LOGIN: "/login",
    RESETPASSWORD: "/reset-password",
  },
  PRIVATE: {
    PARENT: {
      APP: "/app",
    },
    CHILD: {
      DASHBOARD: "dashboard",
      CALENDAR: "calendar",
      COMPANY: "company",
      SCHEDULE: "schedule",
      REVIEW: "review",
      SETTING: {
        NOTIFICATION: "notification",
        PROFILE: "profile",
        FEEDBACK: "feedback",
      },
    },
  },
};
