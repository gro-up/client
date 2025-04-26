export const ROUTER_PATH = {
  PUBLIC: {
    LANDING: "/",
    SIGNUP: "/signup",
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
      RETROSPECTIVE: "retrospective",
      SETTING: {
        NOTIFICATION: "notification",
        PROFILE: "profile",
        FEEDBACK: "feedback",
      },
    },
  },
};
