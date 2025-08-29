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

export const cardData = [
  {
    number: "710",
    headtitle: "Members",
    leftColor: "#4bcc70",
    rightIcon: "FaUserFriends",
    rightColor: "#00bf63",
  },
  {
    number: "14",
    headtitle: "Open Grievance Tasks",
    leftColor: "#f49c14",
    rightIcon: "FaExclamationCircle",
    rightColor: "#d08716",
  },
  {
    number: "$56,575",
    headtitle: "Monthly Dues",
    leftColor: "#44b7e4",
    rightIcon: "FaHandHoldingUsd",
    rightColor: "#3f9fc5",
  },
];

export const membersData = [
  {
    field1: "John Doe",
    field2: "john.doe@example.com",
    field3: "555-123-4567",
  },
  {
    field1: "Jane Smith",
    field2: "jane.smith@example.com",
    field3: "555-987-6543",
  },
  {
    field1: "Robert Johnson",
    field2: "robert.j@example.com",
    field3: "555-555-1212",
  },
  {
    field1: "Robert Johnson",
    field2: "robert.j@example.com",
    field3: "555-555-1212",
  },
  {
    field1: "Robert Johnson",
    field2: "robert.j@example.com",
    field3: "555-555-1212",
  },
  {
    name: "Robert Johnson",
    email: "robert.j@example.com",
    field3: "555-555-1212",
  },
];
export const tasksData = [
  {
    field1: "Case Review",
    field2: "In Progress",
    field3: "Due 2025-09-30",
  },
  {
    field1: "Hearing Prep",
    field2: "Pending",
    field3: "Due 2025-10-05",
  },
  {
    field1: "Final Submission",
    field2: "Completed",
    field3: "Due 2025-10-12",
  },
];

// ✅ Upcoming Dates & Deadlines (Color 3)
export const deadlinesData = [
  {
    field1: "06/09/25",
    field2: "11:00 am",
    field3: "VUE Demo",
  },
  {
    field1: "06/09/25",
    field2: "11:00 am",
    field3: "VUE Demo",
  },
  {
    field1: "06/09/25",
    field2: "11:00 am",
    field3: "VUE Demo",
  },
];
export const tableHeaders = {
  members: {
    fieldCol1: "Name",
    fieldCol2: "Email",
    fieldCol3: "Phone",
  },
  tasks: {
    fieldCol1: "Task",
    fieldCol2: "Status",
    fieldCol3: "Due Date",
  },
  deadlines: {
    fieldCol1: "Date",
    fieldCol2: "Time",
    fieldCol3: "Description",
  },
};

export const colors = {
  caption: {
    bg: "#1b7398",
    text: "#ffffff",
  },
  color1: {
    rowAlt: "#d1e3ea",
    headerBg: "#8fbacd",
    headerText: "#122159",
    borderRight: "#6ca0b7",
  },
  color2: {
    rowAlt: "#fff1d6",
    headerBg: "#ffbd59",
    headerText: "#122159",
    borderRight: "#e1b24c",
  },
  color3: {
    rowAlt: "#e3f3e0",
    headerBg: "#aed7a8",
    headerText: "#122159",
    borderRight: "#a0c49c",
  },
};
