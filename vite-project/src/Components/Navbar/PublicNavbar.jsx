import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: shared navbar styles

export default function PublicNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🚗 ParkEase</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
      <div className="navbar-auth">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}
