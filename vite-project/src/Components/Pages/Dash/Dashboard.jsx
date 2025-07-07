import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <main className="dashboard-container">
      <h1>Welcome, {user?.name}!</h1>
      <p>This is your dashboard where you can manage your parking bookings.</p>

      <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
    </main>
  );
}
