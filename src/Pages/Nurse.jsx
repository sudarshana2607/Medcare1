import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Css/Nurse.css";

function NurseDashboard() {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h2>MedCare</h2>
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/">Profile</a></li>
          <li><a href="/">Notifications</a></li>
          <li>
            <button
              onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>

      <div className="main-container">

        <div className="sidebar">

          <h3>Nurse Panel</h3>

          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Assigned Patients</a></li>
            <li><a href="/">Vital Signs</a></li>
            <li><a href="/">Medication Records</a></li>
            <li><a href="/">Ward Management</a></li>
            <li><a href="/">Emergency Support</a></li>
          </ul>

        </div>

        <div className="dashboard">

          <div className="dashboard-title">
            <h1>Nurse Dashboard</h1>
          </div>

          <div className="card-container">

            <div className="card">
              <h2>Assigned Patients</h2>
              <p>18</p>
            </div>

            <div className="card">
              <h2>Medicines Given</h2>
              <p>34</p>
            </div>

            <div className="card">
              <h2>Emergency Calls</h2>
              <p>3</p>
            </div>

            <div className="card">
              <h2>Active Wards</h2>
              <p>5</p>
            </div>

          </div>

          <div className="table-section">

            <h2>Assigned Patients</h2>

            <table>

              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Ward</th>
                  <th>Condition</th>
                  <th>Doctor</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>P101</td>
                  <td>Ravi Kumar</td>
                  <td>Ward A</td>
                  <td>Recovering</td>
                  <td>Dr. Kavya</td>
                </tr>

                <tr>
                  <td>P102</td>
                  <td>Divya</td>
                  <td>Ward B</td>
                  <td>Critical</td>
                  <td>Dr. Shreya</td>
                </tr>

                <tr>
                  <td>P103</td>
                  <td>Kiran</td>
                  <td>Ward A</td>
                  <td>Stable</td>
                  <td>Dr. Joseph</td>
                </tr>

                <tr>
                  <td>P104</td>
                  <td>Priya</td>
                  <td>Ward C</td>
                  <td>Observation</td>
                  <td>Dr. Kavya</td>
                </tr>
              </tbody>

            </table>

          </div>

          <div className="profile">

            <h2>Nurse Details</h2>

            <p><strong>Name:</strong> Nurse Anitha</p>
            <p><strong>Nurse ID:</strong> N201</p>
            <p><strong>Department:</strong> General Ward</p>
            <p><strong>Shift:</strong> Morning (8:00 AM - 4:00 PM)</p>
            <p><strong>Contact:</strong> +91 9876543210</p>

          </div>

        </div>

      </div>
    </>
  );
}

export default NurseDashboard;