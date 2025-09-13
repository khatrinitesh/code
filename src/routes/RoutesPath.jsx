import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// layout
import DashboardLayout from "./../layout/DashboardLayout";
// pages
import LoginPage from "../pages/loginPage/LoginPage";
import DashboardPage from "./../pages/dashboardPage/DashboardPage";
import CalendarPage from "../pages/calendarPage/CalendarPage";
import MemberListPage from "./../pages/memberlistPage/MemberListPage";
import DispatchPage from "../pages/dispatchPage/DispatchPage";
import ImportMembersPage from "./../pages/importMembersPage/ImportMembersPage";
import DuesPage from "../pages/duesPage/DuesPage";
import PaymentsPage from "./../pages/paymentsPage/PaymentsPage";
import GrievancesPage from "../pages/grievancesPage/GrievancesPage";
import BatchPage from "../pages/batchPage/BatchPage";
import MembersPage from "../pages/membersPage/MembersPage";
import ReportsPage from "../pages/reportsPage/ReportsPage";
import ApprenticeshipPage from "../pages/apprenticeshipPage/ApprenticeshipPage";
import MailPage from "../pages/mailPage/MailPage";
import SettingsPage from "../pages/settingsPage/SettingsPage";
import MatterDetailsPage from "./../pages/matterDetailsPage/MatterDetailsPage";
import MembersProfilePage from "../pages/membersProfilePage/MembersProfilePage";

const RoutesPath = () => {
  // const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/members"
          element={
            <DashboardLayout>
              <MembersPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/members-profile"
          element={
            <DashboardLayout>
              <MembersProfilePage />
            </DashboardLayout>
          }
        />
        <Route
          path="/member-list"
          element={
            <DashboardLayout>
              <MemberListPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/reports"
          element={
            <DashboardLayout>
              <ReportsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/apprenticeship"
          element={
            <DashboardLayout>
              <ApprenticeshipPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/mail"
          element={
            <DashboardLayout>
              <MailPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <DashboardLayout>
              <SettingsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/grievances"
          element={
            <DashboardLayout>
              <GrievancesPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/payments"
          element={
            <DashboardLayout>
              <PaymentsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/matter-details"
          element={
            <DashboardLayout>
              <MatterDetailsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/batch"
          element={
            <DashboardLayout>
              <BatchPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/import-dues"
          element={
            <DashboardLayout>
              <DuesPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/import-members"
          element={
            <DashboardLayout>
              <ImportMembersPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/dispatch"
          element={
            <DashboardLayout>
              <DispatchPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/calendar"
          element={
            <DashboardLayout>
              <CalendarPage />
            </DashboardLayout>
          }
        />

        {/* <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <DashboardPage />
              </DashboardLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        /> */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default RoutesPath;
