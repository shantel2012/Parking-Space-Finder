import { Link } from "react-router-dom";
import "./Navbar.css";

export default function AdminNavbar({ onLogout }) {
  return (
    <nav className="navbar admin-navbar">
      <div className="navbar-logo">
        <Link to="/admin">🚗 ParkEase Admin</Link>
      </div>
      <div className="navbar-links">
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/owners">Owners</Link>
        <Link to="/admin/parking">Parking</Link>
        <Link to="/admin/bookings">Bookings</Link>
        <Link to="/admin/earnings">Earnings</Link>
      </div>
      <div className="navbar-auth">
        <button onClick={onLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
}
