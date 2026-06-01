import React from "react";
import "../Assets/Css/Admin.css";

function Admin() {

const logout = () => {
window.location.href = "/";
};

return (
<> <nav> <div className="logo">
      {/* Use logo image from src/Images */}
      {/* import logo from "../Images/medcarelogo.png"; */}

      <h2>MedCare</h2>
    </div>

    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Profile</a></li>
      <li><a href="/">Notifications</a></li>
      <li>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </li>
    </ul>
  </nav>

  <div className="main-container">

    <div className="sidebar">

      <h2>Admin Panel</h2>

      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/">Manage Doctors</a></li>
        <li><a href="/">Manage Staff</a></li>
        <li><a href="/">Manage Patients</a></li>
        <li><a href="/">Appointments</a></li>
        <li><a href="/">Billing</a></li>
        <li><a href="/">Departments</a></li>
        <li><a href="/">Reports</a></li>
        <li><a href="/">Settings</a></li>
      </ul>

    </div>

    <div className="dashboard">

      <div className="card-container">

        <div className="card">
          <h3>Total Doctors</h3>
          <p>25 Doctors Available</p>
        </div>

        <div className="card">
          <h3>Total Patients</h3>
          <p>140 Patients Registered</p>
        </div>

        <div className="card">
          <h3>Total Staff</h3>
          <p>45 Staff Members</p>
        </div>

        <div className="card">
          <h3>Total Revenue</h3>
          <p>₹ 4,50,000 This Month</p>
        </div>

      </div>

      <div className="table-section">

        <h2>Recent Activities</h2>

        <table>

          <thead>
            <tr>
              <th>User</th>
              <th>Activity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Dr. Kavya</td>
              <td>Updated Patient Report</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Reception Staff</td>
              <td>Booked Appointment</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Admin</td>
              <td>Added New Doctor</td>
              <td>Completed</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</>

);
}

export default Admin;
