import {
  FiUser,
  FiSettings,
  FiMail,
  FiCalendar,
  FiLogOut,
  FiGlobe,
} from "react-icons/fi";
import {
  FaBook,
  FaHandHoldingUsd,
  FaUsers,
  FaExclamationCircle,
  FaDownload,
  FaShippingFast,
  FaChartPie,
} from "react-icons/fa";

export const sidebarNavigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: FaChartPie,
  },
  {
    label: "Members",
    path: "/members",
    icon: FaUsers,
  },
  {
    label: "Grievances",
    path: "/grievances",
    icon: FaExclamationCircle,
  },
  {
    label: "Finances",
    path: "/finances",
    icon: FaHandHoldingUsd,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: FaBook,
  },
  {
    label: "Dues",
    path: "/import-dues",
    icon: FaDownload,
  },
  {
    label: "Members",
    path: "/import-members",
    icon: FaDownload,
  },
  {
    label: "Dispatch",
    path: "/dispatch",
    icon: FaShippingFast,
  },
  {
    label: "Apprenticeship",
    path: "/apprenticeship",
    icon: FiUser,
  },
  {
    label: "Web Portal",
    path: "/login",
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
    field1: "Joel Rosen",
    field2: "joel@velarium.com",
    field3: "(310) 995-8653",
  },
  {
    field1: "Jessie O'donnell",
    field2: "jesse@youremail.net",
    field3: "(310) 555-1123",
  },
  {
    field1: "Steve Brooks",
    field2: "steve@yourlocal.com",
    field3: "(310) 555-4454",
  },
  {
    field1: "Kevin Adams",
    field2: "kevin@yourlocal.com",
    field3: "(310) 555-1111",
  },
];
export const tasksData = [
  {
    field1: "001-2025",
    field2: "04/13/2025",
    field3: "File Grievance Initiation",
  },
  {
    field1: "001-2025",
    field2: "05/10/2025",
    field3: "Interview witness",
  },
  {
    field1: "003-2025",
    field2: "04/01/2025",
    field3: "Investigate body cam footage",
  },
  {
    field1: "003-2025",
    field2: "04/18/2025",
    field3: "Follow-up interviews",
  },
];
export const tasksData2 = [
  {
    field1: "001-2025",
    field2: "06/02/2025",
    field3: "File Grievance Initiation",
  },
  {
    field1: "001-2025",
    field2: "06/10/2025",
    field3: "Interview witness",
  },
  {
    field1: "003-2025",
    field2: "06/13/2025",
    field3: "Investigate body cam footage",
  },
  {
    field1: "003-2025",
    field2: "06/30/2025",
    field3: "Follow-up interviews",
  },
  {
    field1: "001-2025",
    field2: "06/02/2025",
    field3: "File Grievance Initiation",
  },
  {
    field1: "001-2025",
    field2: "06/10/2025",
    field3: "Interview witness",
  },
  {
    field1: "003-2025",
    field2: "06/13/2025",
    field3: "Investigate body cam footage",
  },
  {
    field1: "003-2025",
    field2: "06/30/2025",
    field3: "Follow-up interviews",
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
    field1: "06/23/25",
    field2: "02:00 pm",
    field3: "Planning Meeting",
  },
  {
    field1: "04/15/25",
    field2: "All Day",
    field3: "Membership Dues",
  },
  {
    field1: "04/13/25",
    field2: "10:00 am",
    field3: "Office Meeting",
  },
];
export const deadlinesData2 = [
  {
    field1: "06/09/25",
    field2: "11:00 am",
    field3: "VUE Demo",
  },
  {
    field1: "06/11/25",
    field2: "02:00 pm",
    field3: "Planning Meeting",
  },
  {
    field1: "06/16/25",
    field2: "All Day",
    field3: "Membership Dues",
  },
  {
    field1: "06/30/25",
    field2: "10:00 am",
    field3: "Office Meeting",
  },
  {
    field1: "06/09/25",
    field2: "11:00 am",
    field3: "VUE Demo",
  },
  {
    field1: "06/11/25",
    field2: "02:00 pm",
    field3: "Planning Meeting",
  },
  {
    field1: "06/16/25",
    field2: "All Day",
    field3: "Membership Dues",
  },
  {
    field1: "06/30/25",
    field2: "10:00 am",
    field3: "Office Meeting",
  },
];
export const tableHeaders = {
  members: {
    fieldCol1: "Name",
    fieldCol2: "Email",
    fieldCol3: "Phone",
  },
  tasks: {
    fieldCol1: "Case #",
    fieldCol2: "Due Date",
    fieldCol3: "Task",
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

export const DROPDOWN_OPTIONS_1 = [
  { value: "", label: "No Layout Selected" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];
export const DROPDOWN_OPTIONS_2 = [
  { value: "", label: "No File Selected" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];
export const DROPDOWN_OPTIONS_3 = [
  { value: "", label: "Select Pay Period" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];

export const DROPDOWN_OPTIONS_4 = [
  { value: "", label: "Select Source" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];
