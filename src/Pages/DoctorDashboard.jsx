import React from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/Css/Doctor.css";

function DoctorDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav>
        <div className="logo">
          <img src="/logo.png" alt="MedCare Logo" />
          <h2>MedCare</h2>
        </div>

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Profile</a></li>
          <li><a href="/">Notifications</a></li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>

      {/* MAIN */}
      <div className="main-container">

        {/* SIDEBAR */}
        <div className="sidebar">

          <h3>Doctor Panel</h3>

          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">My Patients</a></li>
            <li><a href="/">Appointments</a></li>
            <li><a href="/">Schedule</a></li>
            <li><a href="/">Reports</a></li>
            <li><a href="/">Emergency Cases</a></li>
            <li><a href="/">Settings</a></li>
          </ul>

        </div>

        {/* DASHBOARD */}
        <div className="dashboard">

          <div className="dashboard-title">
            <h1>Doctor Dashboard</h1>
          </div>

          {/* CARDS */}
          <div className="card-container">

            <div className="card">
              <h2>Total Patients</h2>
              <p>32 Patients Registered</p>
            </div>

            <div className="card">
              <h2>Today's Appointments</h2>
              <p>12 Appointments Scheduled</p>
            </div>

            <div className="card">
              <h2>Pending Reports</h2>
              <p>6 Reports Pending Review</p>
            </div>

            <div className="card">
              <h2>Emergency Cases</h2>
              <p>3 Emergency Patients</p>
            </div>

          </div>

          {/* TABLE */}
          <div className="table-section">

            <h2>Today's Appointments</h2>

            <table>

              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Condition</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Arun Kumar</td>
                  <td>Cold & Fever</td>
                  <td>10:00 AM</td>
                  <td>Completed</td>
                </tr>

                <tr>
                  <td>Priya</td>
                  <td>Headache</td>
                  <td>11:30 AM</td>
                  <td>Pending</td>
                </tr>

                <tr>
                  <td>Rahul</td>
                  <td>Diabetes Checkup</td>
                  <td>1:00 PM</td>
                  <td>Scheduled</td>
                </tr>

                <tr>
                  <td>Sneha</td>
                  <td>Heart Checkup</td>
                  <td>3:00 PM</td>
                  <td>In Progress</td>
                </tr>
              </tbody>

            </table>

          </div>

          {/* PROFILE */}
          <div className="profile">

            <h2>Doctor Details</h2>

            <p><strong>Name:</strong> Dr. Shreya</p>
            <p><strong>Department:</strong> Neurology</p>
            <p><strong>Experience:</strong> 6 Years</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Email:</strong> shreya@gmail.com</p>

          </div>

        </div>

      </div>
    </>
  );
}

export default DoctorDashboard;