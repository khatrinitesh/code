import {
  FiHome,
  FiUser,
  FiSettings,
  FiMail,
  FiCalendar,
  FiLogOut,
  FiFileText,
  FiUsers,
  FiPackage,
  FiArchive,
  FiBriefcase,
  FiGlobe,
  FiInbox,
} from "react-icons/fi";

export const sidebarNavigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: FiHome,
  },
  {
    label: "Members",
    path: "/members",
    icon: FiUsers,
  },
  {
    label: "Grievances",
    path: "/grievances",
    icon: FiInbox,
  },
  {
    label: "Finances",
    path: "/finances",
    icon: FiFileText,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: FiArchive,
  },
  {
    label: "Importing",
    path: "/importing",
    icon: FiPackage,
  },
  {
    label: "Dispatch",
    path: "/dispatch",
    icon: FiBriefcase,
  },
  {
    label: "Apprenticeship",
    path: "/apprenticeship",
    icon: FiUser,
  },
  {
    label: "Web Portal",
    path: "/web-portal",
    icon: FiGlobe,
  },
  {
    label: "Mail",
    path: "/mail",
    icon: FiMail,
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: FiCalendar,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
  {
    label: "Logout",
    path: "/",
    icon: FiLogOut,
  },
];
