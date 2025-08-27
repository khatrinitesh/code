import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome to the Dashboard</h2>
      <p>This is your main content area.</p>
    </div>
  );
};

export default DashboardPage;
