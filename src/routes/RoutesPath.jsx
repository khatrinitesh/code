import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// layout
import DashboardLayout from "./../layout/DashboardLayout";
// pages
import LoginPage from "../pages/loginPage/LoginPage";
import DashboardPage from "./../pages/dashboardPage/DashboardPage";
import CalendarPage from "../pages/calendarPage/CalendarPage";
import MemberListPage from "./../pages/memberlistPage/MemberListPage";
import DispatchPage from "../pages/dispatchPage/DispatchPage";
import DuesPage from "../pages/duesPage/DuesPage";
import MembersPage from "../pages/membersPage/MembersPage";
import PaymentsPage from "./../pages/paymentsPage/PaymentsPage";
import GrievancesPage from "../pages/grievancesPage/GrievancesPage";

const RoutesPath = () => {
  // const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        {/* dashboard page */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          }
        />
        {/* members list page */}
        <Route
          path="/member-list"
          element={
            <DashboardLayout>
              <MemberListPage />
            </DashboardLayout>
          }
        />
        {/* grievances page */}
        <Route
          path="/grievances"
          element={
            <DashboardLayout>
              <GrievancesPage />
            </DashboardLayout>
          }
        />
        {/* payments page */}
        <Route
          path="/payments"
          element={
            <DashboardLayout>
              <PaymentsPage />
            </DashboardLayout>
          }
        />
        {/* importing > dues page */}
        <Route
          path="/import-dues"
          element={
            <DashboardLayout>
              <DuesPage />
            </DashboardLayout>
          }
        />
        {/* importing > members page */}
        <Route
          path="/import-members"
          element={
            <DashboardLayout>
              <MembersPage />
            </DashboardLayout>
          }
        />
        {/* dispatch page */}
        <Route
          path="/dispatch"
          element={
            <DashboardLayout>
              <DispatchPage />
            </DashboardLayout>
          }
        />
        {/* calendar page */}
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
