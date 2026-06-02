import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Css/ReceptionStaff.css";

function ReceptionDashboard() {

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

          <h2>Reception Staff</h2>

          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Patient Registration</a></li>
            <li><a href="/">Appointments</a></li>
            <li><a href="/">Billing</a></li>
            <li><a href="/">Emergency Admission</a></li>
            <li><a href="/">Visitor Management</a></li>
            <li><a href="/">Support</a></li>
            <li><a href="/">Settings</a></li>
          </ul>

        </div>

        <div className="dashboard">

          <h1>Reception Dashboard</h1>

          <div className="card-container">

            <div className="card">
              <h3>New Patients</h3>
              <p>28</p>
            </div>

            <div className="card">
              <h3>Today's Appointments</h3>
              <p>64</p>
            </div>

            <div className="card">
              <h3>Emergency Admissions</h3>
              <p>7</p>
            </div>

            <div className="card">
              <h3>Pending Bills</h3>
              <p>15</p>
            </div>

          </div>

          <div className="table-section">

            <h2>Today's Appointments</h2>

            <table>

              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Doctor</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>P101</td>
                  <td>Arun Kumar</td>
                  <td>Dr. Kavya</td>
                  <td>10:00 AM</td>
                  <td>
                    <span className="status completed">
                      Checked In
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>P102</td>
                  <td>Divya</td>
                  <td>Dr. Joseph</td>
                  <td>11:30 AM</td>
                  <td>
                    <span className="status pending">
                      Waiting
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>P103</td>
                  <td>Kiran</td>
                  <td>Dr. Shreya</td>
                  <td>12:00 PM</td>
                  <td>
                    <span className="status urgent">
                      Emergency
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="form-section">

            <h2>Patient Registration</h2>

            <div className="form-group">
              <label>Patient Name</label>
              <input
                type="text"
                placeholder="Enter Patient Name"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="form-group">
              <label>Department</label>

              <select>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Dermatology</option>
                <option>ENT</option>
                <option>Gynecology</option>
                <option>General Medicine</option>
                <option>Urology</option>
                <option>Radiology</option>
                <option>Oncology</option>
              </select>
            </div>

            <div className="form-group">
              <label>Reason for Visit</label>

              <textarea
                rows="4"
                placeholder="Enter Details"
              ></textarea>
            </div>

            <button className="btn">
              Register Patient
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default ReceptionDashboard;