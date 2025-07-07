import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicNavbar from "./Components/Navbar/PublicNavbar";
import PrivateNavbar from "./Components/Navbar/PrivateNavbar";
import AdminNavbar from "./Components/Navbar/AdminNavbar";
import Home from "./Components/Pages/Home";
import HowItWorks from "./Components/Pages/WhyChooseus";
import Pricing from "./Components/Pages/Pricing";
import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup";
import Dashboard from "./Components/Pages/Dash/Dashboard";
// import Bookings from "./pages/private/Bookings";
// import Profile from "./pages/private/Profile";
// import AddParking from "./pages/private/AddParking";
// import BookingRequests from "./pages/private/BookingRequests";
// import Earnings from "./pages/private/Earnings";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import AdminUsers from "./pages/admin/AdminUsers";
// import AdminOwners from "./pages/admin/AdminOwners";
// import AdminParking from "./pages/admin/AdminParking";
// import AdminBookings from "./pages/admin/AdminBookings";
// import AdminEarnings from "./pages/admin/AdminEarnings";

function App() {
  const [userRole, setUserRole] = useState("guest"); // guest, user, owner, admin

  const handleLogin = (role) => setUserRole(role); // role should be passed on login
  const handleLogout = () => setUserRole("guest");

  return (
    <Router>
      {userRole === "guest" && <PublicNavbar />}
      {(userRole === "user" || userRole === "owner") && (
        <PrivateNavbar onLogout={handleLogout} />
      )}
      {userRole === "admin" && <AdminNavbar onLogout={handleLogout} />}

      <Routes>
        {userRole === "guest" && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />
            <Route
              path="/signup"
              element={<Signup onLogin={handleLogin} />}
            />
          </>
        )}

        {(userRole === "user" || userRole === "owner") && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/dashboard/bookings" element={<Bookings />} />
            <Route path="/dashboard/profile" element={<Profile />} /> */}
            {userRole === "owner" && (
              <>
                {/* <Route path="/dashboard/add-parking" element={<AddParking />} />
                <Route path="/dashboard/requests" element={<BookingRequests />} />
                <Route path="/dashboard/earnings" element={<Earnings />} /> */}
              </>
            )}
          </>
        )}

        {userRole === "admin" && (
          <>
            {/* <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/owners" element={<AdminOwners />} />
            <Route path="/admin/parking" element={<AdminParking />} />
            <Route path="/admin/bookings" element={<AdminBookings />} />
            <Route path="/admin/earnings" element={<AdminEarnings />} /> */}
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
