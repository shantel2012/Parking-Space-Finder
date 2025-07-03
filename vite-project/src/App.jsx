import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login/Login";
import Listings from "./Components/Pages/Listings";
import Spotdetails from"./Components/Pages/Spotdetails";
import Dashboard from "./Components/Pages/Dash/Dashboard";
import DownloadApp from "./Components/Pages/Download/DownloadApp";
import Footer from "./Components/Home/Footer";
// import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/spot/:id" element={<Spotdetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/download" element={<DownloadApp />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer/>
    </>
  );
}
