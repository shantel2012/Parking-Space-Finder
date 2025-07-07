import { Link } from "react-router-dom";
import "./Navbar.css";

export default function PrivateNavbar({ onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/dashboard">🚗 ParkEase</Link>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/bookings">Bookings</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/add-parking">Add Parking</Link>
        <Link to="/dashboard/requests">Requests</Link>
        <Link to="/dashboard/earnings">Earnings</Link>
      </div>
      <div className="navbar-auth">
        <button onClick={onLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
}
