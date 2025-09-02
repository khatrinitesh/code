import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import DashboardLayout from "./../layout/DashboardLayout";
import DashboardPage from "./../pages/dashboardPage/DashboardPage";
import CalendarPage from "../pages/calendarPage/CalendarPage";
import MemberListPage from "./../pages/memberlistPage/MemberListPage";

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
