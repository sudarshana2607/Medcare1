import "./App.css";
import Homepage from "./Homepage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Signin from "./Pages/Signin";
import BillingStaff from "./Pages/BillingStaff";
import DoctorDashboard from "./Pages/DoctorDashboard";
import LabStaff from "./Pages/LabStaff";
import NurseDashboard from "./Pages/Nurse";
import PharmacyDashboard from "./Pages/PharmacyDashboard";
import ReceptionDashboard from "./Pages/ReceptionDashboard";
import Patient from "./Pages/Patient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />

        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/labstaff" element={<LabStaff />} />
        <Route path="/billingstaff" element={<BillingStaff />} />
        <Route path="/nurse" element={<NurseDashboard />} />
        <Route path="/pharmacystaff" element={<PharmacyDashboard />} />
        <Route path="/receptionstaff" element={<ReceptionDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;